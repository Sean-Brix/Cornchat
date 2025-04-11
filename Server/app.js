import express from "express"
import path from "path"
import { fileURLToPath } from "url"
import dotenv from "dotenv"
import cors from 'cors'
import cookieParser from "cookie-parser"
import session from "express-session"
import dbStore from 'connect-mongo'

// Configuration
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const SECRETE = process.env.SECRET;

// Request Handler
const app = express();

// Middleware
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({
  origin: "*" || process.env.FRONTEND_URL,
  methods: ['POST', 'GET']
}))

// Session
app.use(session({

  saveUninitialized: false,
  resave: false,
  secret: SECRETE || "alternative secrete",

  // Cookie
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 
  },

  // Session Storage
  store: dbStore.create({
    mongoUrl: process.env.MONGO_URI || "mongodb://localhost:27017/Cornchat",
    collectionName: process.env.MONGO_SESSION || "sessions",
    ttl: 60 * 60 * 24,
    autoRemove: 'native',
  })

}))

// Route
import route from './Route/route.js'
app.use('/', route);

export default app
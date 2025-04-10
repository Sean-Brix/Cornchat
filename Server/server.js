import http from 'http'
import express from "express"
import { connect_socket } from './socket.js'
import path from "path"
import { fileURLToPath } from "url"
import colors from "colors"
import dotenv from "dotenv"
import cors from 'cors'
import cookieParser from "cookie-parser"
import session from "express-session"
import dbStore from 'connect-mongo'
import mongoose from "mongoose"

// Configuration
dotenv.config();
colors.enable();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 3000;
const SECRETE = process.env.SECRET;

// Server
const app = express();
const server = http.createServer(app);

// Open socket
connect_socket(server);

server.listen(PORT, () => {
  console.log("\n\nLink: ".magenta + ("127.0.0.1:" + PORT + "/").yellow.underline + "\n\n\n");
});

// Database
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/Cornchat");

// Middleware
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({
  origin: "*" || process.env.FRONTEND_URL,
  methods: ['POST', 'GET']
}))

app.use(session({
  saveUninitialized: false,
  resave: false,
  secret: SECRETE || "alternative secrete",
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 
  },
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
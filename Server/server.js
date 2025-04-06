import express from "express"
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
const PORT = process.env.PORT;
const SECRETE = process.env.SECRET;

// Server
const server = express();

server.listen(PORT, () => {
  console.log("\n\nLink: ".magenta + ("127.0.0.1:" + PORT + "/").yellow.underline + "\n\n\n");
});

// Database
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/Cornchat");

// Middleware
server.use(cookieParser);
server.use(express.urlencoded({ extended: true }));

server.use(cors({
  origin: '*',
  methods: ['POST', 'GET']
}))

server.use(cookieParser());

server.use(session({
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
    collectionName: process.env.MONGO_SESSION || "session",
    ttl: 60 * 60 * 24,
    autoRemove: 'native'
  })
}))



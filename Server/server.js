import http from 'http'
import app from './app.js'
import { connect_socket } from './socket.js'
import path from 'path';
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'
import colors from 'colors'
import mongoose from "mongoose"

// Create Server with request handler
const server = http.createServer(app);

// Open socket
connect_socket(server);

// Database
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/Cornchat");

// Configuration
dotenv.config();
colors.enable();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 3000;

// Server
server.listen(PORT, () => {
  console.log("\n\nLink: ".magenta + ("127.0.0.1:" + PORT + "/").yellow.underline + "\n\n\n");
});

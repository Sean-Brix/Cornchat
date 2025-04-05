import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import colors from "colors";
import dotenv from "dotenv";

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



import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Routers
const Route = express.Router();

import user from './userRoute.js'
Route.use('/user', user);

export default Route;
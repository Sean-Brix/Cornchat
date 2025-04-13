import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
import { getFriendList } from '../Controller/friends/friends_ctrl.js';

// Configure
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Route
const Route = express.Router();

// CRUD Friends
Route.route('/')
    .get(getFriendList)
    .post((req, res)=>{
        
    })


export default Route;
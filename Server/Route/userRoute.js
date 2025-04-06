import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
import { user_exist, verify_password } from '../Controller/authentication/login_ctrl.js';
import { register_user, server_filter } from '../Controller/authentication/register_ctrl.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Route
const Route = express.Router();

// Authenticate
Route.route('/login')
    .post(user_exist, verify_password)

// Create Account
Route.route('/register')
    .post(server_filter, register_user)

// Logout
Route.route('/logout')
    .get((req, res)=>{
        try{

            req.session.destroy((err)=>{
                if(err){
                    console.log("Logout Route - Failed to destroy the session:", err);
                    return res.status(500).json({
                        message: "Something went wrong, restart?"
                    });
                }
                res.clearCookie('connect.sid');
                res.status(200).json({
                    message: "Session Destroyed"
                });
            });

        }

        catch(e){
            console.log("ERROR:", e);
            res.status(500).json({
                message: "Internal server error"
            });
        }
    })
    
export default Route;
import accountModel from '../../Model/Accounts/model_accounts.js'
import bcrypt from 'bcrypt'

const config = {
    // Filter
    username_minlength: 6,
    username_maxlength: 20
}

export async function register_user(req, res, next){
    
    try{
        const username_inp = req.body.username;
        const password_inp = req.body.password;
        const fullname_inp = req.body.fullname;

        const user = new accountModel({
            username: username_inp,
            password: await bcrypt.hash(password_inp, await bcrypt.genSalt(10)),
            fullname: fullname_inp
        })

        await user.save();

        res.status(201).json({
            valid: true,
            message: 'Account Successfully Registered!'
        }) 
    }
    catch(e){
        console.log("ERROR: register_user function in signupCtrl module \n\n" + e);
        return res.status(500).json({ valid: false, message: "Something went wrong, restart?" });
    }
} 

export function server_filter(req, res, next) {
    try{
        const username = req.body.username;
        const password = req.body.password;

        // Check if fields are empty
        if (!username || !password) {
            return res.status(400).json({ valid: false, message: "All fields are required" });
        }

        // Check username length
        if (username.length < config.username_minlength || username.length > config.username_maxlength) {
            return res.status(400).json({ valid: false, message: "Username must be between 3 and 20 characters" });
        }

        // Check password length (minimum 8 characters)
        if (password.length < 8) {
            return { valid: false, message: "Password must be at least 8 characters long" };
        }

        // Check username for spaces and special characters
        if (!/^[a-zA-Z0-9_]+$/.test(username)) {
            return res.status(400).json({ valid: false, message: "Username can only contain letters, numbers and underscore" });
        }

        // Check password strength
        if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/.test(password)) {
            return { valid: false, message: "Password must contain at least one uppercase letter, one lowercase letter, and one number" };
        }

        next();
    }
    catch(e){
        console.log('ERROR: server_filter function in signupCtrl module \n\n' + e);
        return res.status(500).json({ valid: false, message: "Something went wrong, restart?", error: e });
    }
}
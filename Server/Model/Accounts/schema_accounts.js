import mongoose, { mongo } from "mongoose";

const schema = mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true
    },
    fullname: {
        type: String,
        require: true
    }

    
});

export default schema;
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min:3,
        max:20,
        unique:true
    },
    password:{
        type:String,
        required:true,
        min:7
    },
    mail:{
        type:String,
        required:true,
        max:50,
        unique:true
    },
    city:{
        type:String,
        max:50,
    },
    isAdmin:{
        type:Boolean,
        deafault:false
    },
    profilePic:{
        type:String,
        default:""
    },
},
{timestamps:true}
);

module.exports = mongoose.model("User",UserSchema);
const router = require("express").Router();
const User = require("../models/User")

const bcryptjs = require("bcryptjs");

//Register
router.post("/register", async (req,res)=>{
  
    try{
        //password encryption
        const salt = await bcryptjs.genSalt(10);
        const hiddedpassword = await bcryptjs.hash(req.body.password, salt);

        //creating new user
        const newUser = new User({
            username:req.body.username,
            password:hiddedpassword,
            mail:req.body.mail,
        });

        //response
        const user = await newUser.save();
        res.status(200).json(user);
    }catch(err){
        res.status(401).json(err);
    }
});

//login
router.post("/login",async (req,res)=>{
    try{
        const user = await User.findOne({mail: req.body.mail});
        if (!user) return res.status(401).json("User not found");

        const crtPassword = await bcryptjs.compare(req.body.password, user.password);
        if (!crtPassword) return res.status(402).json("Incorrect Pasword");

        res.status(200).json(user);
    }catch(err){
        res.status(403).json(err)
    }
})

module.exports = router;
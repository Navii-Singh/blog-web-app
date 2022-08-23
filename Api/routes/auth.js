const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const User = require('../models/Users')
//REGISTER
router.post('/register', (req,res) =>{
    
    bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
    if(err){
        res.status(500).json(err)
        return
    } 
    req.body.password = hash;

    try{
        const user = new User(req.body)
        await user.save();
        res.status(200).json('successfully registered')
    }catch(err){
        res.status(500).json(err)
    }
    });
})


//LOGIN
router.post('/login',async (req,res) =>{
    try{
        const user = await User.findOne({email:req.body.email})
        !user && res.status(400).json("wrong credentials")

       const validate = await  bcrypt.compare(req.body.password, user.password)
       !validate &&  res.status(400).json("wrong credentials")
    //    const {password ,...others} = user._doc
            res.status(200).json(user._doc)
    }catch(err){
        res.status(500).json("internal error")
    }
})


module.exports= router;
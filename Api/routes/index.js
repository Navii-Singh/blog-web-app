const express = require('express');
const router = express.Router();

router.get('/',(req,res) =>{
        res.end('home page')
})
//AUTHENTICATION
router.use('/auth',require('./auth'))
//POSTS
router.use('/post',require('./post'))
//USERS
router.use('/user',require('./user'))
//CONTACT
router.use('/contact',require('./contact'))
//UPLOAD
router.use('/upload',require('./upload'))
module.exports= router;
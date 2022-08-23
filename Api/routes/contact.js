const express = require('express');
const router = express.Router();
const Contact = require('../models/Contacts')
router.post('/post',async (req,res) =>{
        try{
          const result =   await Contact.create(req.body);
          res.status(200).json(result)
        }catch(err){
            res.status(500).json(ErrorEvent)
        }
})
module.exports= router;
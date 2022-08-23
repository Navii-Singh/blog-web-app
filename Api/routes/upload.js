const express = require("express");
const router = express.Router();

const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'images')
    },
    filename: function (req, file, cb) {
      
      cb(null, req.body.name)
    }
  })
  
  const upload = multer({ storage: storage })

  router.post('/post',upload.single('file'),(req,res) =>{
      res.status(200).json('successfully uploaded')
  })
  module.exports = router;
require('dotenv').config()
const express = require('express');
const db = require('./config/mongoose')
const app = express();
const cors = require('cors')
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/images', express.static('images'))
app.use('/',require('./routes'));


app.listen(5000,(err) =>{
    if(!err){
        console.log('server is running on port no : 5000');
        return;
    }
    console.log('server is not listening')
})
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true,
        unique:true
    },
    desc:{
        type:String,
        required:true
    },
    authorName:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:false
    },
    photo:{
        type:String,
        required:false
    }

  },{
    timestamps: true
  });

  const Post = mongoose.model('Post', postSchema);
  module.exports = Post;
const express = require("express");
const router = express.Router();
const Post = require("../models/Posts");
//create post
router.post("/create", async (req, res) => {
  try {
    const newPost = await Post.create(req.body);
    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});
//update post
router.put("/:id", async (req, res) => {
  Post.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true },
    (err, docs) => {
      if (err) {
        res.status(500).json(err);
        return;
      }
      res.status(200).json(docs);
    }
  );
});
//get post by id

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete

router.delete("/:id", async (req, res) => {
  try {
    const result = await Post.findByIdAndDelete(req.params.id);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get("/", async (req, res) => {
  const user = req.query.user;
  const cat = req.query.cat;
  let post;
 try{
    if (user) {
        post = await Post.find({ authorName: user });
      } else if (cat) {
        post = await Post.find({ category: cat });
      } else {
        post = await Post.find();
      }
      res.status(200).json(post);
 }catch(err){
    res.status(500).json("404");
 }

});

module.exports = router;

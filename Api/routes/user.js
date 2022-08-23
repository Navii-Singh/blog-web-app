const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const Post = require("../models/Posts");
const bcrypt = require("bcrypt");
const saltRounds = 10;
//update
router.patch("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
        if (err) {
          res.status(500).json(err);
          return;
        }
        req.body.password = hash;

        try {
          const user = await User.findByIdAndUpdate(req.params.id, req.body,{ new: true });
          res.status(200).json(user);
        } catch (err) {
          res.status(500).json(err);
        }
      });
    }
  } else {
    res.status(401).json("u can only update your account");
  }
});
//Delete
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findById(req.params.id);

      try {
        await Post.deleteMany({ authorName: user.username });
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("user has been deleted");
      } catch (err) {
        res.status(500).json(err);
      }
    } catch (err) {
      res.status(404).json("user doesn't exist");
    }
  } else {
    res.status(401).json("you can only delete your account");
  }
});
module.exports = router;

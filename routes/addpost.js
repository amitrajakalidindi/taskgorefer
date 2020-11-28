var express = require('express');
var router = express.Router();
var posts = require('../model/posts.js');

router.get('/', (req, res) => {
   	res.render('addpost');
});

router.post('/', (req, res) => {
    var post = req.body;
    var newPost = new posts({
        name : post.name,
        location: post.location,
        description: post.description
    });
    
    newPost.save((err, posts) => {
        if(err){
         console.log("error");
        }
        else{
            res.redirect('/');
        }
    });
});

module.exports = router;
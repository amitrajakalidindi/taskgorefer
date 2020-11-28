var express = require('express');
var router = express.Router();
var posts = require('../model/posts.js');

router.get('/:id', (req, res) => {
	function callback(post){
		res.render('post',{
			post: post
		});
	}
   	posts.findById(`${req.params.id}`, (err, res) => {
	   	if(err){
	   		console.log(err);
	   	}
	   	else{
	   		callback(res);
	   	}
	});
});

module.exports = router;
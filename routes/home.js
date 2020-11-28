var express = require('express');
var router = express.Router();
var posts = require('../model/posts.js');

router.get('/', (req, res) => {
	function callback(postsList){
		res.render('home',{
			posts: postsList
		});
	}
   	posts.find((err, res) => {
	   	if(err){
	   		console.log(err);
	   	}
	   	else{
	   		callback(res);
	   	}
	});
});

module.exports = router;
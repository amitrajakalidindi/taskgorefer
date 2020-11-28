var express = require('express');
var router = express.Router();
var posts = require('../model/posts.js');

router.get('/', (req, res) => {
	var searchItem = req.query.searchItem;
	function callback(postsList){
		res.render('search',{
			searchItem: searchItem,
			posts: postsList
		});
	}
   	posts.find( { $or: [ { name: new RegExp(searchItem, 'i') }, { location: new RegExp(searchItem, 'i') }] } , (err, res) => {
	   	if(err){
	   		console.log(err);
	   	}
	   	else{
	   		callback(res);
	   	}
	});
});

module.exports = router;
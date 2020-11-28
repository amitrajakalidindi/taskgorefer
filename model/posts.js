const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://mydb:amit955raja@cluster0.gwlqy.mongodb.net/mydb?retryWrites=true&w=majority');

var postsSchema = mongoose.Schema({
   name: String,
   location: String,
   description: String,
});
var posts = mongoose.model("posts", postsSchema);

module.exports = posts;
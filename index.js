const express = require('express');
var bodyParser = require('body-parser');
var home = require('./routes/home.js');
var addpost = require('./routes/addpost.js');
var post = require('./routes/post.js');
var search = require('./routes/search.js');

var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', home);
app.use('/addpost', addpost);
app.use('/post', post);
app.use('/search', search);

app.listen(process.env.PORT || 3000);
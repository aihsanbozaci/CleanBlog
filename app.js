const express = require('express');
const app = express();
app.use(express.static('public'));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cleanblog-test-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const ejs = require('ejs');

const path = require('path');

const Post = require('./models/Post');
//MIDDLEWARES
app.use(express.urlencoded({extended : true})); //response form (reading url data)
app.use(express.json());                        //converting data to json file to read
//TEMPLATE ENGINE
app.set('view engine', 'ejs');

app.get('/', async(req, res) => {
  const posts = await Post.find({})
  res.render('index', {
    posts
  });
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/add_post', (req, res) => {
  res.render('add_post');
});
app.post('/add_post', async(req, res) => {
  //console.log(req.body);
  await Post.create(req.body);
  res.redirect('/');
});
app.get('/post', (req, res) => {
  res.render('post');
});

const port = 3000;
app.listen(port, () => {
  console.log(`>>Server started at port ${port}`);
});

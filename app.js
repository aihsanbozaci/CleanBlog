const express = require('express');
const app = express();
app.use(express.static('public'));

const ejs = require('ejs');

const path = require('path');

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/add_post', (req, res) => {
  res.render('add_post');
});
app.get('/post', (req, res) => {
  res.render('post');
});


const port = 3000;
app.listen(port, () => {
  console.log(`>>Server started at port ${port}`);
});

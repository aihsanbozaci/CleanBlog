const express = require('express');
const app = express();
const postController = require("./controllers/postControllers");
const pageController = require("./controllers/pageControllers");
var methodOverride = require('method-override');
const ejs = require('ejs');
const path = require('path');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//MIDDLEWARES
app.use(express.urlencoded({extended : true})); //response form (reading url data)
app.use(express.json());  
app.use(express.static('public'));              //converting data to json file to read
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);
//TEMPLATE ENGINE
app.set('view engine', 'ejs');
//Routes
app.get('/', pageController.getIndex);
app.get('/about', pageController.getAbout);
app.get('/add_post', pageController.getAddPost);
app.get('/post/:id', pageController.getSinglePost);
app.post('/add_post', postController.postAddPost);
app.get("/post/edit/:id", pageController.editPage);
app.put("/post/:id", postController.updatePost);
app.delete('/post/:id', postController.deletePost);


const port = 3000;
app.listen(port, () => {
  console.log(`>>Server started at port ${port}`);
});

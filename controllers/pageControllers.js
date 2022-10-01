//DB Route
const Post = require('./../models/Post');
//Index
exports.getIndex = async (req, res) => {
  const posts = await Post.find({});
  res.render('index', {
    posts,
  });
};
//About
exports.getAbout = (req, res) => {
  res.render('about');
};
//Add Post Page
exports.getAddPost = (req, res) => {
  res.render('add_post');
};
//Edit Page
exports.editPage = async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  res.render("edit", {
    post,
  });
};
//Post Pages
exports.getSinglePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('post', {
    post,
  });
};

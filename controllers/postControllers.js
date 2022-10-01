//DB Route
const Post = require('./../models/Post');

//Post Create
exports.postAddPost = async (req, res) => {
    await Post.create(req.body);
    res.redirect('/');
  };
  
//Post Update
exports.updatePost = async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  post.title = req.body.title;
  post.detail = req.body.detail;
  post.detail2 = req.body.detail2;
  post.save();
  res.redirect(`/post/${req.params.id}`);
};

//Post Delete
exports.deletePost = async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  await Post.findByIdAndRemove(req.params.id);
  res.redirect("/");
};


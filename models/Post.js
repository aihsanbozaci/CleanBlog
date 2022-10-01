const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const PostSchema = new Schema({
    title: String,
    detail: String,
    detail2: String,
    dateCreated: {
        type: Date,
        default: Date.now,
    },
});

//Model
const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
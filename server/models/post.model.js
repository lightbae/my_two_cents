var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  cover: {
    type: String,
    required: false
  },
  body: {
    type: String,
    required: true
  },
  author:{
    type: String, //this type will change to user oject
    required: true
  },
  postDate:{
    type: Date,
    required: true
  },
  summary:{
    type: String,
    required: true
  }
});

var Post = mongoose.model('Post', postSchema);
module.exports = Post;

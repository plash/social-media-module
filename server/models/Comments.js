const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  body: {
    type: String,
    required: true
  },
  postId: {
    type: String,
    required: true
  }
});

const Model = mongoose.model('comment', CommentSchema);

module.exports = Model;
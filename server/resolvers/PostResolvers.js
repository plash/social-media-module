const posts = require('../config/posts.json');
const CommentModel = require('../models/Comments');

const Query = {
  Posts: (_, { }) =>
    Promise.resolve(
      posts
    ),
  Post: (_, { id }) =>
    Promise.resolve(posts.find(post => post.id == id)),
};

const Post = {
  comments: async (post, _) =>
    await CommentModel.find({ postId: post.id }),
};

module.exports = {
  Query,
  Post
}

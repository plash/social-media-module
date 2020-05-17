const { find } = require('lodash');
const CommentModel = require('../models/Comments');
const posts = require('../config/posts.json');

const Query = {
  Comments: async (_, { postId }) =>
    await CommentModel.findOne({
      postId
    }),
  Comment: async (_, { id }) =>
    await CommentModel.findById(id)
};
const Mutation = {
  createComment: async (_, { payload }) => {
    const newComment = {
      date: new Date(),
      body: payload.body,
      postId: payload.postId
    };
    const commentModel = new CommentModel(newComment);
    const comment = await commentModel.save();
    return Promise.resolve(comment);
  },
};
const Comment = {
  post: (comment, _) =>
    find(posts, post => post.id == comment.postId),
};

module.exports = {
  Query,
  Mutation,
  Comment
}
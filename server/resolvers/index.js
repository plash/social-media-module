const {
  Query: PostQuery,
  Post,
} = require('./PostResolvers');
const {
  Query: CommentQuery,
  Comment,
  Mutation: CommentMutation
} = require('./CommentResolvers');

module.exports = {
  Query: {
    ...PostQuery,
    ...CommentQuery
  },
  Mutation: {
    ...CommentMutation,
  },
  Post,
  Comment
};

const { makeExecutableSchema } = require('graphql-tools');
const Comment = require('./CommentSchema');
const Post = require('./PostSchema');
const resolvers = require('../resolvers/index');

const schema = makeExecutableSchema({
  typeDefs: [Post, Comment],
  resolvers,
  logger: { log: e => console.log(e) },
});

module.exports = schema;

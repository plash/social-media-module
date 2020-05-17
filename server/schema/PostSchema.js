const Comment = require('./CommentSchema');

const Post = `
type Query {
    Post(id: ID!): Post
    Posts: [Post]
}
type Post {
    id: ID!
    type: String
    source: String
    comments: [Comment]
}
`;

module.exports = Post;

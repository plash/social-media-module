const Post = require('./PostSchema');

const Comment = `
extend type Query {
    Comment(id: ID!): Comment
    Comments(postId: ID!): [Comment]
}
input CommentInput {
  body: String
  postId: ID!
}
type Mutation {
    createComment (payload: CommentInput!): Comment
}
type Comment {
    _id: ID!
    body: String
    # When the Comment was published
    date: String
    post: Post
}
`;

module.exports = Comment;

import gql from "graphql-tag";

export const postComment = gql`
  mutation createComment($payload: CommentInput!) {
    createComment(payload: $payload) {
      _id
      body
    }
  }
`;
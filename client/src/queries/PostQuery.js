import gql from "graphql-tag";

export const postQuery = gql`
  query Posts {
    Posts {
      id
      source
      type
      comments {
        _id
        body
      }
    }
  }
`;
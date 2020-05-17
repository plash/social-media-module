import React, { Component } from "react";
import Post from "../Post";
import { postQuery } from "../../queries/PostQuery";

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    // fetch the initial posts
    this.fetchPosts();
  }

  fetchPosts() {
    this.props.apollo_client
      .query({
        query: postQuery,
        options: { fetchPolicy: "network-only" }
      })
      .then(response => {
        this.setState({ posts: response.data.Posts });
        localStorage.setItem("posts", JSON.stringify(response.data.Posts));
      });
  }

  render() {
    return (
      <div>
        {this.state.posts
          .map(post => (
            <Post
              type={post.type}
              image={post.source}
              key={post.id}
              id={post.id}
              comments={post.comments}
            />
          ))}
      </div>
    );
  }
}

export default Posts;
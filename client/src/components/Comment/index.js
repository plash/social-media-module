import React, { Component } from "react";
import { Comment as CommentComponent } from 'semantic-ui-react'
import avatar from '../../avatar.png';
import "./comment.css";

class Comment extends Component {

  render() {
    const { body } = this.props;
    return (
      <CommentComponent className="comment-box">
        <CommentComponent.Avatar src={avatar} className="comment-avatar" />
        <CommentComponent.Content className="comment-text">
          <CommentComponent.Text>{body}</CommentComponent.Text>
        </CommentComponent.Content>
      </CommentComponent>
    );
  }
}

export default Comment;
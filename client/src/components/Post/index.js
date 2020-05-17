import React, { Component } from "react";
import { Button, Form, Card, Embed } from 'semantic-ui-react'
import { Mutation } from '@apollo/react-components';
import Comments from '../Comments';
import "./Post.css";
import { postComment } from "../../queries/CommentQuery";

class Post extends Component {
  render() {
    const { id, image, type, comments } = this.props;
    let input;
    return (
      <div className="Post-image">
        {type === "image" ? <Card color='red' image={image} centered={true} /> : <Embed url={image} />}
        <Comments comments={comments} postId={id} />
        <Mutation mutation={postComment}>
          {(createComment => (
            <Form reply onSubmit={e => {
              e.preventDefault();
              const payload = {
                body: input.value,
                postId: id
              }
              createComment({ variables: { payload } });
              input.value = '';
            }}>
              <textarea ref={node => {
                input = node;
              }} 
              style={{
                margin: '5px'
              }}/>
              <Button content='Add Reply' labelPosition='left' icon='edit' primary />
            </Form>
          ))}

        </Mutation>
      </div>
    );
  }
}

export default Post;
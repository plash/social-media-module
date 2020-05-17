import React from 'react'
import { Comment as ComponentComp, Header } from 'semantic-ui-react'

import Comment from '../Comment';
import "./comments.css";

class Comments extends React.Component {
  render() {
    const { comments } = this.props;
    return (
      <ComponentComp.Group size="mini" className="comments">
        <Header as='h3' dividing>
          Comments
        </Header>
        {
          comments.map(comment => <Comment key={comment._id} body={comment.body} date={comment.date} />)
        }
      </ComponentComp.Group>
    )
  }
}

export default Comments

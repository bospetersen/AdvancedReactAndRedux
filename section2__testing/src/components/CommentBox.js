import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'redux/actions/index';
import requireAuth from 'components/hoc/requireAuth';

class CommentBox extends Component {
  state = { comment: '' };

  handleChange = (event) => {
    this.setState({ comment: event.target.value });
  };

  onSubmitHandler = (event) => {
    event.preventDefault()
    this.props.saveComment(this.state.comment);

    // console.log('Comment Submitted!', event);
    this.setState({ comment: '' });

  }



  render() {

    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <textarea onChange={this.handleChange} value={this.state.comment} />
          <div>
            <button>Submit</button>
          </div>
        </form>
        <button
          className="fetch-comments"
          onClick={this.props.fetchComments}>
          Fetch Comments
          </button>
      </div>
    )
  }
}


export default connect(null, actions)(requireAuth(CommentBox))

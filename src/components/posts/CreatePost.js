import React, { Component } from "react";
import classes from "./CreatePost.module.css";
import { connect } from "react-redux";

import { createPost } from "../../store/actions/postActions";

class CreatePost extends Component {
  state = {
    title: "",
    content: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.state);
    this.props.createPost(this.state);
  };

  render() {
    return (
      <div className={classes.FormContainer}>
        <div className={classes.Wrapper}>
          <form onSubmit={this.handleSubmit} className={classes.Form}>
            <h3 className={classes.Title}>Create New Post</h3>

            <div className={classes.FormGroup}>
              <input
                type="text"
                onChange={this.handleChange}
                className={classes.FormInput}
                placeholder="Title"
                id="title"
              />
              <label htmlFor="title" className={classes.FormLabel}>
                Title
              </label>
            </div>

            <div className={classes.FormGroup}>
              <textarea
                className={classes.TextArea}
                id="content"
                rows="25"
                onChange={this.handleChange}
                placeholder="Post Content"
              />
              <label htmlFor="content" className={classes.FormLabel}>
                Post Content
              </label>
            </div>
            <div className={classes.FormGroup}>
              <button className={classes.btn}>Create </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createPost: post => dispatch(createPost(post))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreatePost);

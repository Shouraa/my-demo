import React from "react";
import classes from "./PostDetails.module.css";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";

const PostDetails = props => {
  const { post, auth } = props;

  if (!auth.uid) return <Redirect to="/signin" />;

  if (post) {
    return (
      <div className={classes.PostDetails}>
        <div className={classes.PostCard}>
          <div className={classes.PostContent}>
            <h2 className={classes.PostTitle}> {post.title}</h2>
            <p>{post.content}</p>
          </div>
          <div className={classes.PostInfo}>
            <div>
              {post.authorFirstName} {post.authorLastName}
            </div>
            <div>{moment(post.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return <p>Loading ...</p>;
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const posts = state.firestore.data.posts;
  const post = posts ? posts[id] : null;
  return {
    post: post,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "posts"
    }
  ])
)(PostDetails);

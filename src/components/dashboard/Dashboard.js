import React, { Component } from "react";
import classes from "./Dashboard.module.css";
import PostList from "../posts/PostList";
import Notifications from "../dashboard/Notifications";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  render() {
    // console.log(this.props);
    const { posts, auth } = this.props;

    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className={classes.Dashboard}>
        <div className={classes.PostList}>
          <PostList posts={posts} />
        </div>
        <div className={classes.Notifications}>
          <Notifications />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    posts: state.firestore.ordered.posts,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "posts" }])
)(Dashboard);

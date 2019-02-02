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
    const { posts, auth, notifications } = this.props;

    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className={classes.Dashboard}>
        <div className={classes.PostList}>
          <PostList posts={posts} />
        </div>
        <div className={classes.Notifications}>
          <Notifications notifications={notifications} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    posts: state.firestore.ordered.posts,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "posts", orderBy: ["createdAt", "desc"] },
    { collection: "notifications", limit: 4, orderBy: ["time", "desc"] }
  ])
)(Dashboard);

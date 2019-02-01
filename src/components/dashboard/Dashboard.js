import React, { Component } from "react";
import classes from "./Dashboard.module.css";
import PostList from "../posts/PostList";
import Notifications from "../dashboard/Notifications";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

class Dashboard extends Component {
  render() {
    // console.log(this.props);
    const { posts } = this.props;

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
    posts: state.post.posts
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(Dashboard);

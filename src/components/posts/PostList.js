import React from "react";
import classes from "./PostList.module.css";
import PostSummary from "./PostSummary";
import { Link } from "react-router-dom";

const PostList = ({ posts }) => {
  return (
    <div className={classes.PostList}>
      {posts &&
        posts.map(post => {
          return (
            <Link to={"/post/" + post.id} key={post.id}>
              <PostSummary post={post} />
            </Link>
          );
        })}
    </div>
  );
};

export default PostList;

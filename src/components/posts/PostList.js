import React from "react";
import classes from "./PostList.module.css";
import PostSummary from "./PostSummary";

const PostList = ({ posts }) => {
  return (
    <div className={classes.PostList}>
      {posts &&
        posts.map(post => {
          return <PostSummary post={post} key={post.id} />;
        })}
    </div>
  );
};

export default PostList;

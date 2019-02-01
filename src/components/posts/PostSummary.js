import React from "react";
// import { Link } from "react-router-dom";

import classes from "./PostSummary.module.css";

const PostSummary = ({ post }) => {
  return (
    <div className={classes.PostSummary}>
      <div className={classes.Upper}>
        <h2 className={classes.PostTitle}>{post.title}</h2>
      </div>

      <div className={classes.Lower}>
        <p className={classes.PostedBy}>Posted by Akhtar lashi</p>
        <h4 className={classes.DatePosted}>3rd September, 2am</h4>
      </div>
    </div>
  );
};

export default PostSummary;

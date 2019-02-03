import React from "react";
import moment from "moment";

import classes from "./PostSummary.module.css";

const PostSummary = ({ post }) => {
  return (
    <div className={classes.PostSummary}>
      <div className={classes.Upper}>
        <h2 className={classes.PostTitle}>{post.title}</h2>
      </div>

      <div className={classes.Lower}>
        <p>
          Posted by {post.authorFirstName} {post.authorLastName}
        </p>
        <p>{moment(post.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  );
};

export default PostSummary;

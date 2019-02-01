import React from "react";
import classes from "./PostDetails.module.css";

const PostDetails = props => {
  const id = props.match.params.id;
  return (
    <div className={classes.PostDetails}>
      <div className={classes.PostCard}>
        <div className={classes.PostContent}>
          <h2 className={classes.PostTitle}>PostTitle- {id}</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
            nihil temporibus assumenda ipsam soluta, repellat minus ut
            repellendus corrupti ratione tenetur. Tempore hic, voluptatibus
            dicta laborum voluptates illum praesentium earum. Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Veritatis nihil temporibus
            assumenda ipsam soluta, repellat minus ut repellendus corrupti
            ratione tenetur. Tempore hic, voluptatibus dicta laborum voluptates
            illum praesentium earum.
          </p>
        </div>
        <div className={classes.PostInfo}>
          <div>Created by Akhtar lashi</div>
          <div>2md September, 2am</div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

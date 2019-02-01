import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./SignedInLinks.module.css";

const SignedInLinks = props => {
  return (
    <ul>
      <li>
        <NavLink to="/create" className={classes.btn}>
          New Post
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className={classes.btn}>
          Log Out
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className={classes.btnInitials}>
          NN
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;

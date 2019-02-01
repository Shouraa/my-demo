import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./SignedOutLinks.module.css";

const SignedOutLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/signup" className={classes.btn}>
          Signup
        </NavLink>
      </li>
      <li>
        <NavLink to="/signin" className={classes.btn}>
          Login
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;

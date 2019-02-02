import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

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
        <NavLink to="/" className={classes.btn} onClick={props.signOut}>
          Log Out
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className={classes.btnInitials}>
          {props.profile.initials}
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);

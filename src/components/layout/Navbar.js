import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

import classes from "./Navbar.module.css";

const Navbar = props => {
  return (
    <nav className={classes.Navbar}>
      <Link to="/" className={classes.Brand}>
        LOGO
      </Link>
      <SignedOutLinks />
      <SignedInLinks />
    </nav>
  );
};

export default Navbar;

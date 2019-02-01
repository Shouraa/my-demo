import React, { Component } from "react";
import classes from "./SignIn.module.css";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className={classes.FormContainer}>
        <div className={classes.Wrapper}>
          <form onSubmit={this.handleSubmit} className={classes.Form}>
            <h3 className={classes.Title}>Sign In</h3>

            <div className={classes.FormGroup}>
              <input
                type="email"
                onChange={this.handleChange}
                className={classes.FormInput}
                placeholder="Email"
                id="email"
              />
              <label htmlFor="email" className={classes.FormLabel}>
                Email
              </label>
            </div>

            <div className={classes.FormGroup}>
              <input
                type="password"
                onChange={this.handleChange}
                className={classes.FormInput}
                placeholder="Password"
                id="password"
              />
              <label htmlFor="password" className={classes.FormLabel}>
                Password
              </label>
            </div>
            <div className={classes.FormGroup}>
              <button className={classes.btn}>Log In </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;

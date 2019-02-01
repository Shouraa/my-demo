import React, { Component } from "react";
import classes from "./SignUp.module.css";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
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
            <h3 className={classes.Title}>Sign Up</h3>

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
                Name
              </label>
            </div>

            <div className={classes.FormGroup}>
              <input
                type="text"
                onChange={this.handleChange}
                className={classes.FormInput}
                placeholder="First Name"
                id="firstName"
              />
              <label htmlFor="firstName" className={classes.FormLabel}>
                First Name
              </label>
            </div>

            <div className={classes.FormGroup}>
              <input
                type="text"
                onChange={this.handleChange}
                className={classes.FormInput}
                placeholder="Last Name"
                id="lastName"
              />
              <label htmlFor="lastName" className={classes.FormLabel}>
                Last Name
              </label>
            </div>

            <div className={classes.FormGroup}>
              <button className={classes.btn}>Sign Up </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;

import React, { Component } from "react";
import classes from "./SignIn.module.css";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";

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
    this.props.signIn(this.state);
  };

  render() {
    const { authError, auth } = this.props;

    if (auth.uid) return <Redirect to="/" />;

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
            <div className={classes.RedText}>
              {authError ? <p>{authError}</p> : null}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);

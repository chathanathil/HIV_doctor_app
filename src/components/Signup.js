import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { registerUser } from "../actions/authAction";
import "../style/auth.css";
import Navbar from "./common/Navbar";
// import "../style/common.css";
class Signup extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      password: "",
      cpassword: "",
      errors: {}
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      errors: newProps.errors
    });
  }

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSignup = e => {
    e.preventDefault();
    const newUser = {
      id: this.state.id,
      password: this.state.password
    };
    console.log(newUser);
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.props;

    return (
      <div className="main-body-auth">
        <Navbar />
        <div className="main-content-auth">
          <input
            name="id"
            value={this.state.id}
            onChange={this.onInputChange}
          />
          <input
            name="password"
            value={this.state.password}
            onChange={this.onInputChange}
          />
          <input
            name="cpassword"
            value={this.state.cpassword}
            onChange={this.onInputChange}
          />
          {errors && errors.msg}
          <button onClick={this.onSignup}>Signup</button>
        </div>
        {/* <main> */}
        {/*          
          <section>
            <div class="container">
              <div class="logo">Doctor login</div>
              <div class="login-item">
                <form action="" method="post" class="form form-login">
                  <div class="form-field">
                    <input
                      name="id"
                      value={this.state.id}
                      onChange={this.onInputChange}
                      id="login-username"
                      type="text"
                      class="form-input"
                      placeholder="Enter your DID"
                      required
                    />
                  </div>

                  <div class="form-field">
                    <input
                      name="password"
                      value={this.state.password}
                      onChange={this.onInputChange}
                      id="login-password"
                      type="password"
                      class="form-input"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div class="form-field">
                    <input
                      name="cpassword"
                      value={this.state.cpassword}
                      onChange={this.onInputChange}
                      id="login-password"
                      type="password"
                      class="form-input"
                      placeholder="Password"
                      required
                    />
                  </div>
                  {errors && errors.msg}

                  <div class="form-field">
                    <input
                      onClick={this.onSignup}
                      type="submit"
                      value="Log in"
                    />
                  </div>
                </form>
              </div>
              <div>
                <center>
                  <a href="">Not Registered?</a>
                </center>
              </div>
            </div>
          </section>
        </main> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors,
  user: state.user
});
export default connect(mapStateToProps, {
  registerUser
})(Signup);

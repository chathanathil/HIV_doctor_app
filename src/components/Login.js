import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loginUser } from "../actions/authAction";
import Navbar from "./common/Navbar";
import "../style/auth.css";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      password: ""
    };
  }

  componentDidMount() {}

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onLogin = e => {
    e.preventDefault();
    const newUser = {
      id: this.state.id,
      password: this.state.password
    };
    console.log(newUser);
    this.props.loginUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.props;

    return (
      <div>
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
          {errors && errors.msg}

          <button onClick={this.onLogin}>Signup</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors,
  user: state.user
});
export default connect(mapStateToProps, {
  //   registerUser,
  loginUser
})(Signup);

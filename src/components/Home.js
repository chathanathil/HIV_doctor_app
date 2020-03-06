import React, { Component } from "react";
import { connect } from "react-redux";
import { openPatient } from "../actions/patientAction";
import PropTypes from "prop-types";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      id: ""
    };
  }

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    const id = this.state.id;
    this.props.openPatient(id, this.props.history);
  };
  render() {
    const { errors } = this.props;

    return (
      <div>
        <input name="id" value={this.state.id} onChange={this.onInputChange} />
        {errors && errors.msg}
        <button onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }
}

Home.propTypes = {
  openPatient: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  user: state.user,
  patient: state.patient
});
export default connect(mapStateToProps, { openPatient })(Home);

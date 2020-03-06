import React, { Component } from "react";
import { connect } from "react-redux";
import { getMedicine } from "../actions/patientAction";
class Medicine extends Component {
  constructor() {
    super();
    this.state = {
      patient: null
    };
  }
  componentDidMount() {
    this.setState({ patient: this.props.match.params.id }, () => {
      this.props.getMedicine(this.state.patient);
    });
  }

  render() {
    return <div>hii</div>;
  }
}
const mapStateToProps = state => ({
  chat: state.chat,
  patient: state.patient,
  auth: state.auth
});
export default connect(mapStateToProps, { getMedicine })(Medicine);

import React, { Component } from "react";
import { connect } from "react-redux";
import { getResults } from "../actions/patientAction";
import { storage } from "../firebase";

class Results extends Component {
  constructor() {
    super();
    this.state = {
      patient: null,
      date: "",
      subject: "",
      description: "",
      photo: null,
      photoUrl: ""
    };
  }
  componentDidMount() {
    this.setState({ patient: this.props.match.params.id }, () => {
      this.props.getResults(this.state.patient);
    });
  }

  photoHandleChange = e => {
    if (e.target.files[0]) {
      const photo = e.target.files[0];
      this.setState(() => ({ photo }));
    }
  };

  onPhotoUpload = e => {
    const { photo } = this.state;
    if (photo === null) {
      this.setState({ photoError: "Select a photo" });
      return;
    } else {
      const uploadTask = storage.ref(`results/${photo.name}`).put(photo);
      uploadTask.on(
        "state_changed",
        snapshot => {
          // progress function
          const photoProgress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          this.setState({ photoProgress });
        },
        error => {
          // error function
          console.log(error);
        },
        () => {
          // complete function
          storage
            .ref("results")
            .child(photo.name)
            .getDownloadURL()
            .then(photoUrl => {
              console.log(photoUrl);
              this.setState({ photoUrl });
            });
        }
      );
    }
  };
  render() {
    return <div>hii</div>;
  }
}
const mapStateToProps = state => ({
  chat: state.chat,
  patient: state.patient,
  auth: state.auth
});
export default connect(mapStateToProps, { getResults })(Results);

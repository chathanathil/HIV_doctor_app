import React, { Component } from "react";
import io from "socket.io-client";
import moment from "moment";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { displayChats, afterPostMessage } from "../actions/chatAction";

class Chat extends Component {
  constructor() {
    super();
    this.state = {
      chatMessage: "",
      patient: null
    };
  }

  componentDidMount() {
    let server = "http://localhost:8000";
    this.socket = io(server);

    this.props.displayChats();
    this.setState({ patient: this.props.match.params.id });
    this.socket.on("Output DR Chat Message", messageFromBackend => {
      this.props.afterPostMessage(messageFromBackend);
    });
  }

  handleChange = e => {
    this.setState({
      chatMessage: e.target.value
    });
  };

  handleSubmit = e => {
    const { user } = this.props.auth;
    e.preventDefault();
    let sender = user.id;
    let receiver = this.state.patient;
    let nowTime = moment();
    let chatMessage = this.state.chatMessage;

    this.socket.emit("Message from doctor", {
      chatMessage,
      sender,
      receiver,
      nowTime
    });
    this.setState({ chatMessage: "" });
  };

  render() {
    let chatList =
      this.props.chat.chats &&
      this.props.chat.chats.map(item => {
        return <p>{item.message}</p>;
      });
    return (
      <div>
        {chatList}
        <input value={this.state.chatMessage} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Send</button>
        <button
          onClick={() => {
            this.props.history.push(`/result/${this.state.patient}`);
          }}
        >
          Result
        </button>
        <button
          onClick={() => {
            this.props.history.push(`/medicine/${this.state.patient}`);
          }}
        >
          Medicine
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  chat: state.chat,
  patient: state.patient,
  auth: state.auth
});
export default connect(mapStateToProps, { displayChats, afterPostMessage })(
  Chat
);

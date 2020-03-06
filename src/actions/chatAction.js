import { GET_CHATS, AFTER_POST_MESSAGE } from "./types";
import axios from "axios";

// Display Chats
export const displayChats = () => dispatch => {
  // dispatch(setAlumniLoading());
  axios
    .get("http://localhost:8000/api/chats/drGetChat")
    .then(res => {
      dispatch({
        type: GET_CHATS,
        payload: res.data
      });
      console.log(res.data);
    })
    .catch(err => {
      dispatch({
        type: GET_CHATS,
        payload: {}
      });
    });
};

export function afterPostMessage(data) {
  return {
    type: AFTER_POST_MESSAGE,
    payload: data
  };
}

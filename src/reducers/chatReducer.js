import { GET_CHATS, AFTER_POST_MESSAGE } from "../actions/types";

const initialState = {
  chats: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CHATS:
      return {
        ...state,
        chats: action.payload
      };
    case AFTER_POST_MESSAGE:
      return {
        ...state,
        chats: state.chats.concat(action.payload)
      };
    default:
      return state;
  }
}

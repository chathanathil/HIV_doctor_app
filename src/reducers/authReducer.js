import { SET_CURRENT_USER, LOADING_USER, GET_ERRORS } from "../actions/types";
import isEmpty from "../validation/is-Empty";

const initialState = {
  isAuthenticated: false,
  user: {},
  messages: {},
  newUser: false,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_USER:
      return {
        ...state,
        loading: true
      };

    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
        loading: false
      };
    case GET_ERRORS:
      return {
        loading: false
      };
    default:
      return state;
  }
}

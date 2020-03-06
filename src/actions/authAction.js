import axios from "axios";
import {
  GET_ERRORS,
  SET_CURRENT_USER,
  LOADING_USER,
  EMAIL_SENT
} from "./types";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

// Register user
export const registerUser = (userData, history) => dispatch => {
  dispatch(setUserLoading());

  axios
    .post("http://localhost:8000/api/doctors/signup", userData)
    .then(res => {
      if (res.data.token) {
        // Save to localStorege
        const { token } = res.data;
        // set token to ls
        localStorage.setItem("jwtToken", token);
        // Set token to auth header
        setAuthToken(token);
        // Decode the token to get user data
        const decoded = jwt_decode(token);
        // Indicating new user
        // dispatch({ type: NEW_USER });

        // Set current user
        dispatch(setCurrentUser(decoded));
        history.push("/home");
      } else if (res.data.msg) {
        dispatch({
          type: GET_ERRORS,
          payload: res.data
        });
      } else {
        dispatch({
          type: GET_ERRORS,
          payload: "Something went wrong"
        });
      }
    })
    .catch(err => console.log(err));
};

// Login user
export const loginUser = (userData, history) => dispatch => {
  dispatch(setUserLoading());

  axios
    .post("http://localhost:8000/api/doctors/login", userData)
    .then(res => {
      if (res.data.token) {
        // Save to localStorege
        const { token } = res.data;
        // set token to ls
        localStorage.setItem("jwtToken", token);
        // Set token to auth header
        setAuthToken(token);
        // Decode the token to get user data
        const decoded = jwt_decode(token);
        // Set current user
        dispatch(setCurrentUser(decoded));

        history.push("/home");
      } else if (res.data.msg) {
        dispatch({
          type: GET_ERRORS,
          payload: res.data
        });
      } else {
        dispatch({
          type: GET_ERRORS,
          payload: "Something went wrong"
        });
      }
    })
    .catch(err => console.log(err));
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  dispatch(setUserLoading());
  // Remove token from ls
  localStorage.removeItem("jwtToken");
  // Remove auth header for future request
  setAuthToken(false);
  // set current user {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};

// Loading user
export const setUserLoading = () => {
  return {
    type: LOADING_USER
  };
};

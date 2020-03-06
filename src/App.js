import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import PrivateRoute from "./components/common/PrivateRoute";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authAction";

import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import Chat from "./components/Chat";
import Result from "./components/Results";
import Medicine from "./components/Medicine";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  //Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // store.dispatch(clearInmates());
    // store.dispatch(clearVacatedStudents());
    // store.dispatch(clearAccounts());
    // store.dispatch(clearAlumni());
    // Redirect to Register page
    window.location.href = "/";
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Switch>
          <PrivateRoute exact path="/home" component={Home} />
        </Switch>
        <Switch>
          <PrivateRoute exact path="/chat/:id" component={Chat} />
        </Switch>
        <Switch>
          <PrivateRoute exact path="/result/:id" component={Result} />
        </Switch>
        <Switch>
          <PrivateRoute exact path="/medicine/:id" component={Medicine} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Rec from "./components/Rec";
import Saved from "./components/SavedProfiles";
import Profile from "./components/UserProfile";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LogIn} />
          <Route path="/rec/:usrnm" component={Rec} />
          <Route path="/profile/:usrnm" component={Profile} />
          <Route path="/edit" component={Rec} />
          <Route path="/saved/:usrnm" component={Saved} />
        </div>
      </Router>
    );
  }
}

export default App;

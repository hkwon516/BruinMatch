import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Rec from "./components/Rec";
import Saved from "./components/Saved";
import Profile from "./components/UserProfile";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LogIn} />
          <Route path="/rec/:usrnm" component={Rec} />
          <Route path='/profile/:id' component={Profile} />
          {/*<Route path="/saved/:" component={Saved} />
             <Route path='/edit' component={Rec} />
            <Route path='/save' component={Rec} /> */}
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from "react";
import "../App.css";
import "../index.css";
import axios from "axios";
import { Link } from "react-router-dom";
import UserProfile from "./UserProfile";

class Saved extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [{ name: "Eggert" }],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8082/api/users/rec")
      .then((res) => {
        this.setState({
          users: res.data,
        });
        this.props.history.push("/saved");
      })
      .catch((err) => {
        console.log("Error from Saved");
      });
  }

  render() {
    const users = this.state.users;
    console.log("PrintUser: " + users);
    let userList;

    if (!users) {
      userList = "there is no user record!";
    } else {
      console.log("Hello");
      userList = users.map((user, k) => <UserProfile user={user} key={k} />);
    }

    return (
      <div className="ShowBookList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />

              <h2 className="display-4 text-center">Saved</h2>
              <div className="PersonalCards">Hello</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Saved;

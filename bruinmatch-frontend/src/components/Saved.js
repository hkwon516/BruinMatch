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
      <div>
        <div className="w-full">
          <div className="h-16 bg-headingBox">
            <div className="px-8 ">
              <div className="py-3 text-white text-3xl font-main font-bold tracking-wider ">
                <a href="./SignUp">BruinMatch</a>
              </div>
              <div className="flex w-full items-center justify-end text-xl font-navbar text-white text-bold">
                <div className="-mt-12 mx-6 hover:text-yellow">
                  <a href="./Saved">Saved</a>
                </div>
                <div className="-mt-12 hover:text-yellow">
                  <a href="./UserProfile">My Profile</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Saved;

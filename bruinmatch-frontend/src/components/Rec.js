import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import UserProfile from "./UserProfile";
//pages
// import Signup from "../pages/route";

class Rec extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8082/api/users/rec")
      .then((res) => {
        this.setState({
          users: res.data,
        });
        this.props.history.push("/rec");
      })
      .catch((err) => {
        console.log("Error from Rec");
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
        <div className="flex flex-row">
          <div className="w-3/12">
            <div className="min-h-screen bg-filter">
              <div className="font-navbar text-2xl text-center py-4 text-main text-extrabold tracking-wide">
                Filter
              </div>
            </div>
          </div>
        </div>
      </div>
      // <div className="ShowBookList">
      //   <div className="container">
      //     <div className="row">
      //       <div className="col-md-12">
      //         <br />
      //         <h2 className="display-4 text-center">Recommendations</h2>
      //       </div>
      //     </div>

      //     <div className="list">{userList}</div>
      //   </div>
      // </div>
    );
  }
}

export default Rec;

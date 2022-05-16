import React, { Component } from "react";
import "../Rec.css";
import styles from "../Rec.css";
import axios from "axios";
import { Link } from "react-router-dom";
import UserProfile from "./Profile";

class Rec extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      filter: {
        samegender: false,
        onthehill: false,
        alchohol: false,
        pets: false,
        nightowl: false,
      },
      usrnm: this.props.match.params.usrnm,
    };
  }

  onChange = (e) => {
    var newFilter = this.state.filter;
    newFilter[e.target.name] = !newFilter[e.target.name];
    this.setState({
      filter: newFilter,
    });
    console.log(this.state.filter);
  };

  onClick = (e) => {
    this.props.history.push(`/profile/${this.state.usrnm}`);
    window.location.reload(false);
  };

  componentDidMount() {
    axios
      .get("http://localhost:8082/api/users/rec/" + this.state.usrnm)
      .then((res) => {
        this.setState({
          users: res.data,
        });
        console.log(this.state.history);
      })
      .catch((err) => {
        console.log("Error from ShowUserList");
      });
  }

  render() {
    const users = this.state.users;
    const filter = this.state.filter;
    var newUsers = [];
    let userList;

    if (users) {
      var keystuff = Object.keys(filter);
      var shouldFilter = false;
      for (var i = 0; i < keystuff.length; i++) {
        if (filter[keystuff[i]]) {
          shouldFilter = true;
          console.log("H");
          break;
        }
      }
      if (shouldFilter) {
        for (var i = 0; i < users.length; i++) {
          if (users[i].samegender && filter["samegender"]) {
            console.log(1);
            newUsers.push(users[i]);
          } else if (users[i].onthehill && filter["onthehill"]) {
            console.log(2);
            newUsers.push(users[i]);
          } else if (users[i].alchohol && filter["alchohol"]) {
            console.log(3);
            newUsers.push(users[i]);
          } else if (users[i].pets && filter["pets"]) {
            console.log(4);
            newUsers.push(users[i]);
          } else if (users[i].nightowl && filter["nightowl"]) {
            console.log(5);
            newUsers.push(users[i]);
          }
        }
      } else {
        newUsers = users;
      }
      userList = newUsers.map((user) => <UserProfile user={user} />);
    }
    return (
      <div clasName="absolute">
        <div className="w-full">
          <div className="h-16 bg-headingBox">
            <div className="px-8 ">
              <div className="py-3 text-white text-3xl font-main font-bold tracking-wider ">
                <a href="./Rec">BruinMatch</a>
              </div>
              <div className="flex w-full items-center justify-end text-xl font-navbar text-white text-bold">
                <div className="-mt-12 mx-6 hover:text-yellow">
                  <a href="./Saved">Saved</a>
                </div>
                <div className="-mt-12 hover:text-yellow">
                  <a onClick={this.onClick}>My Profile</a>
                </div>
              </div>
              <div className="list">{userList}</div>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-2/12">
            <div className="h-screen bg-filter">
              <div className="font-navbar text-2xl text-center py-4 text-main text-extrabold tracking-wide">
                Filter
              </div>
              <div className="flex justify-center ">
                <div>
                  <div className="form-check py-3">
                    <input
                      className="form-check-input appearance-none h-6 w-6 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                      name="samegender"
                      onClick={this.onChange}
                    ></input>
                    <label
                      className="form-check-label inline-block text-gray-800"
                      for="flexCheckDefault"
                    >
                      <div className="font-sub text-2xl tracking-wide">
                        Same gender only
                      </div>
                    </label>
                  </div>
                  <div className="form-check py-3">
                    <input
                      className="form-check-input appearance-none h-6 w-6 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                      name="onthehill"
                      onClick={this.onChange}
                    ></input>
                    <label
                      className="form-check-label inline-block text-gray-800"
                      for="flexCheckDefault"
                    >
                      <div className="font-sub text-2xl tracking-wide">
                        On The Hill
                      </div>
                    </label>
                  </div>
                  <div className="form-check py-3">
                    <input
                      className="form-check-input appearance-none h-6 w-6 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                      name="nightowl"
                      onClick={this.onChange}
                    ></input>
                    <label
                      className="form-check-label inline-block text-gray-800"
                      for="flexCheckDefault"
                    >
                      <div className="font-sub text-2xl tracking-wide">
                        Night Owl
                      </div>
                    </label>
                  </div>
                  <div className="form-check py-3">
                    <input
                      className="form-check-input appearance-none h-6 w-6 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                      name="alchohol"
                      onClick={this.onChange}
                    ></input>
                    <label
                      className="form-check-label inline-block text-gray-800"
                      for="flexCheckDefault"
                    >
                      <div className="font-sub text-2xl tracking-wide">
                        Alcohol
                      </div>
                    </label>
                  </div>
                  <div className="form-check py-3">
                    <input
                      className="form-check-input appearance-none h-6 w-6 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                      name="pets"
                      onClick={this.onChange}
                    ></input>
                    <label
                      className="form-check-label inline-block text-gray-800"
                      for="flexCheckDefault"
                    >
                      <div className="font-sub text-2xl tracking-wide">
                        Pets Allowed
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative max-w-screen-lg mx-auto p-4">
          <div className="grid grid-cols-2 gap-8 mt-12">
            <div className="w-full h-0 shadow-lg pb-full rounded-xl bg-yellow-300">
              HELLO
            </div>
            <div className="w-full h-0 shadow-lg pb-full rounded-xl bg-red-300">
              HOLA
            </div>
            <div className="w-full h-0 shadow-lg pb-full rounded-xl bg-green-300">
              HOLA
            </div>
            <div className="w-full h-0 shadow-lg pb-full rounded-xl bg-indigo-300">
              HOLA
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Rec;

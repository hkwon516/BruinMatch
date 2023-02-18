import React, { Component } from "react";
import "../Rec.css";
import styles from "../Rec.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import swal from "sweetalert";
import base64 from "react-native-base64";

const url = "https://opentdb.com/api.php?amount=20&type=boolean&encode=base64";

class Recommendation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
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

  async getTrivia() {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  }

  onChange = (e) => {
    var newFilter = this.state.filter;
    newFilter[e.target.name] = !newFilter[e.target.name];
    this.setState({
      filter: newFilter,
    });
    console.log(this.state.filter);
  };

  onClickProfile = (e) => {
    this.props.history.push(`/profile/${this.state.usrnm}`);
    window.location.reload(false);
  };

  onClickSaved = (e) => {
    this.props.history.push(`/saved/${this.state.usrnm}`);
    window.location.reload(false);
  };

  // onClickSaved = (e) => {
  //   this.props.history.push(`/login`);
  //   window.location.reload(false);
  // };

  onClickRec = (e) => {
    this.props.history.push(`/rec/${this.state.usrnm}`);
    window.location.reload(false);
  };
  componentDidMount() {
    var question = "";
    this.getTrivia().then((data) => {
      // this.setState({
      //   questionToday: data.results[0]["question"],
      // });
      console.log(data.results[0]);
      // question = data.results[0]["question"]
      // console.log(this.state.questionToday);
      var question = data.results[0]["question"];
      var correctAnswer = data.results[0]["correct_answer"];
      question = base64.decode(question);
      correctAnswer = base64.decode(correctAnswer);
      swal({
        title: "Trivia!",
        text: correctAnswer + ": " + question,
        icon: "success",
        button: "Cool!",
      });
      // this.setState({
      //   v: data,
      // });
      // console.log(data.results[0]["question"]),
      // var v = data.results[0]["question"],
    });
    console.log(this.state.questionToday);

    axios
      .get("http://localhost:8082/api/users/rec/" + this.state.usrnm)
      .then((res) => {
        this.setState({
          users: res.data,
        });
      })
      .catch((err) => {
        console.log("Error from ShowUserList");
      });

    axios
      .get("http://localhost:8082/api/users/" + this.state.usrnm)
      .then((res) => {
        this.setState({
          user: res.data,
        });
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
    var keystuff = Object.keys(filter);
    var bool = false;
    if (users) {
      var shouldFilter = false;
      for (var i = 0; i < keystuff.length; i++) {
        if (filter[keystuff[i]]) {
          shouldFilter = true;
          break;
        }
      }
      if (shouldFilter) {
        for (var i = 0; i < users.length; i++) {
          var check = false;
          for (var j = 0; j < keystuff.length; j++) {
            if (filter[keystuff[j]] == true) {
              if (keystuff[j] == "samegender" && users[i].samegender) {
                check = true;
              } else if (keystuff[j] == "onthehill" && users[i].onthehill) {
                check = true;
              } else if (keystuff[j] == "alchohol" && users[i].alchohol) {
                check = true;
              } else if (keystuff[j] == "pets" && users[i].pets) {
                check = true;
              } else if (keystuff[j] == "nightowl" && users[i].nightowl) {
                check = true;
              } else {
                check = false;
                break;
              }
            }
          }
          if (check) {
            console.log(1);
            newUsers.push(users[i]);
          }
        }
      } else {
        newUsers = users;
      }
      // console.log(this.state.user);
      userList = newUsers.map((user) => (
        <Profile user={user} account={this.state.user} note="" putNote={bool} />
      ));
    }

    return (
      <div className="overflow-auto resize-none">
        <div className="w-full">
          <div className="h-16 bg-headingBox">
            <div className="px-8 ">
              <div className="py-3 text-white text-3xl font-Ubuntu font-bold tracking-widest">
                <a onClick={this.onClickRec} style={{ cursor: "pointer" }}>
                  BruinMatch
                </a>
              </div>
              <div className="flex w-full items-center justify-end text-xl font-navbar text-white text-bold">
                <div className="-mt-12 mx-4 hover:text-yellow">
                  <a onClick={this.onClickSaved} style={{ cursor: "pointer" }}>
                    Saved
                  </a>
                </div>
                <div className="-mt-12 mx-6 hover:text-yellow">
                  <a
                    onClick={this.onClickProfile}
                    style={{ cursor: "pointer" }}
                  >
                    My Profile
                  </a>
                </div>
                <div className="-mt-12  hover:text-yellow">
                  <a href="/login" style={{ cursor: "pointer" }}>
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div> */}
        <div className="flex flex-row">
          <div className="w-2/12 top-0 bottom-0">
            <div className="h-full min-h-screen  bg-filter">
              <div className="font-navbar text-2xl text-center py-4 text-main text-extrabold tracking-wide">
                Filter
              </div>
              <div className="flex justify-center ">
                <div>
                  <div className="form-check py-3">
                    <input
                      className="form-check-input appearance-none h-6 w-6 border rounded-lg border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
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
                      <div className="font-sub text-2xl text-greyText font-semibold tracking-normal font-Ubuntu">
                        Same gender only
                      </div>
                    </label>
                  </div>
                  <div className="form-check py-3">
                    <input
                      className="form-check-input appearance-none h-6 w-6 border rounded-lg border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
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
                      <div className="font-sub text-2xl text-greyText font-semibold tracking-normal font-Ubuntu">
                        On The Hill
                      </div>
                    </label>
                  </div>
                  <div className="form-check py-3">
                    <input
                      className="form-check-input appearance-none h-6 w-6 border rounded-lg border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
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
                      <div className="font-sub text-2xl text-greyText font-semibold tracking-normal font-Ubuntu">
                        Night Owl
                      </div>
                    </label>
                  </div>
                  <div className="form-check py-3">
                    <input
                      className="form-check-input appearance-none h-6 w-6 border rounded-lg border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
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
                      <div className="font-sub text-2xl text-greyText font-semibold tracking-normal font-Ubuntu">
                        Alcohol
                      </div>
                    </label>
                  </div>
                  <div className="form-check py-3">
                    <input
                      className="form-check-input appearance-none h-6 w-6 border rounded-lg border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
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
                      <div className="font-sub text-2xl text-greyText font-semibold tracking-normal font-Ubuntu">
                        Pets Allowed
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ml- 2">
            <div className="list">{userList}</div>
          </div>
        </div>
      </div>
      // </div>
    );
  }
}

export default Recommendation;

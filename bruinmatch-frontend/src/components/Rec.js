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
      // updatedUsers: []
      usrnm: this.props.match.params.usrnm
    };
  }

  // onChange = e => {
  //   if(e.target.name == "samegender" && e.target.checked){
  //     this.setState({updatedUsers: this.state.updatedUsers.filter((user) => user.samegender)})
  //   }else if(e.target.name == "samegender" && !e.target.checked){
  //     this.setState({updatedUsers: this.state.users.filter((user) => !user.samegender)})
  //   }
  // }

  onClick = e => {
    this.props.history.push(`/profile/${this.state.id}`);
    window.location.reload(false);
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/users/rec/'+this.state.usrnm)
      .then(res => {
        this.setState({
          users: res.data,
          // updatedUsers: res.data
        })
        console.log(this.state.history)
      })
      .catch(err =>{
        console.log('Error from ShowUserList');
      })
  };

  render() {
    const users = this.state.users;
    let userList;

    if(users){
      userList = users.map((user) =>
        <UserProfile user={user} />
      );
    }
    return (
      <div>
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
              <div className="list">
                {userList}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-2/12">
            <div className="min-h-screen bg-filter">
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
                      // onChange={this.onChange}
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
                      // onChange={this.onChange}
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
                      // onChange={this.onChange}
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
                      // onChange={this.onChange}
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
                      // onChange={this.onChange}
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
      </div>
    );
  }
}

export default Rec;

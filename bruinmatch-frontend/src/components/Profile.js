import React, { Component } from "react";
import "../Rec.css";
import styles from "../Rec.css";
import axios from "axios";
import { Link } from "react-router-dom";

var user = '';
var account = '';

function addProfile (){
  var currUser = account;
  var saved = currUser.savedProfiles;
  saved.push(user);
  currUser.savedProfiles = saved;
  axios
  .put(`http://localhost:8082/api/users/saved/${account.username}`, currUser)
  .then(res => {})
}

const UserProfile = (props) => {
    user = props.user;
    account = props.account;
    console.log(account);
    return(
              <div className="card-container">
                {/* Change Image Routing!! And ProfPic Dimensions */}
                {/* <img src={require(`/Users/sreyamuppalla/Desktop/BruinMatch/bruinmatch-frontend/src/uploads/${user.articleImage}`)} alt=""/> */}
                <div className="ProfilePhoto1"></div>
                <div className="name1">{user.name}</div>
                <div className="gender1">Gender: {user.gender}</div>
                <div className="major1">Major: {user.major}</div>
                <div className="year1">Year: {user.year}</div>
                <div className="phone1">Phone: {user.phone}</div>
                <div className="email1">Email: {user.email}</div>
                <div className="bio1">Bio:</div>
                <button class="save1" onClick={addProfile}>Save</button>
                <button class="view1">View</button>
              {/*<div className="comments1">Comments:</div>
              <div className="pref1">Same Gender:</div>
              <div className="pref2">On The Hill:</div>
              <div className="pref3">Alcohol:</div>
              <div className="pref4">Pets:</div>
              <div className="pref5">Night Owl:</div>*/}
              </div>
    )
};

export default UserProfile;

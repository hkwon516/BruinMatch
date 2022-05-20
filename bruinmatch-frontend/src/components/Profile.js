import React, { Component } from "react";
import "../Rec.css";
import styles from "../Rec.css";
import axios from "axios";
import { Link } from "react-router-dom";

const UserProfile = (props) => {
    const  user  = props.user;
    console.log(user.articleImage)
    return(
              <div className="container">
                <div className="ProfilePhoto1"></div>
                <div className="name1">{user.name}</div>
                <div className="gender1">Gender: {user.gender}</div>
                <div className="major1">Major: {user.major}</div>
                <div className="year1">Year: {user.year}</div>
                <div className="phone1">Phone: {user.phone}</div>
                <div className="email1">Email: {user.email}</div>
                <div className="bio1">Bio:</div>
                <button class="save1">Like</button>
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

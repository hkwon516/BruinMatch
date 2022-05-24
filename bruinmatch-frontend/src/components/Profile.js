import React, { Component } from "react";
import "../Rec.css";
import styles from "../Rec.css";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from 'sweetalert';


function addProfile(user, account) {
  console.log(account);
  console.log(user);
  var currUser = account;
  var saved = currUser.savedProfiles;
  var addUser = true;
  for(var i = 0; i < saved.length; i++){
    if(saved[i].username === user.username){
      addUser = false;
    }
  }
  if(addUser){
    console.log(1);
    saved.push(user);
    currUser.savedProfiles = saved;
    axios
      .put(`http://localhost:8082/api/users/saved/${account.username}`, currUser)
      .then((res) => {});
  }
  
}

function ViewButton(username)
{
 swal({
   title: username,
   // text: "Please Try Again",
   // icon: "error",
   // button: "Try again",
 });
}

function importAllImages(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAllImages(require.context('../../../bruinmatch-backend/images', false, /\.(png|jpe?g|svg)$/));

const UserProfile = (props) => {
  const user = props.user;
  const account = props.account;
  let picId = user.username + '.png';
  var gender = "Male";
  if(user.gender == 2){
    gender = "Female";
  }else if(user.gender == 3){
    gender = "Not Defined";
  }
  return (
    <div className="card-container">
      {/* Change Image Routing!! And ProfPic Dimensions */}
      {/* <img src={require(`/Users/sreyamuppalla/Desktop/BruinMatch/bruinmatch-frontend/src/uploads/${user.articleImage}`)} alt=""/> */}
      {/* <img src={images['test1.png']} /> */}
      
      <img class="ProfilePhoto1" src={images[picId]} />
      <div className="name1">{user.name}</div>
      <div className="gender1">Gender: {gender}</div>
      <div className="major1">Major: {user.major}</div>
      <div className="year1">Year: {user.year}</div>
      <div className="phone1">Phone: {user.phone}</div>
      <div className="email1">Email: {user.email}</div>
      <div className="bio1">Bio: {user.bio}</div>
      {/*<button className="save1">
        Like
      </button>*/}
      <input
        type="button"
        className="save1"
        value="Like"
        // onClick="alert('aaaaaaa')"
        onClick = {() => addProfile(user, account)}
      />
      <input
        type="button"
        className="view1"
        value="View"
        onClick="alert('aaaaaaa')"
      />      
      {/*<div className="comments1">Comments:</div>
              <div className="pref1">Same Gender:</div>
              <div className="pref2">On The Hill:</div>
              <div className="pref3">Alcohol:</div>
              <div className="pref4">Pets:</div>
              <div className="pref5">Night Owl:</div>*/}
    </div>
    
  );
};

export default UserProfile;

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

function ViewButton(username, gender1,major,phone,email,bio,picId,insta,fb,discord,pref1,pref2,pref3,pref4,pref5)
{
  
  let x = "Gender: "+gender1+"\nMajor: "
  +major+"\nPhone: "+phone+"\nEmail: "+email+"\nInstagram: "+insta+
  "\nFacebook: "+fb+"\nDiscord: "+discord+"\n\nPreferences: ";

  //same gender only preference
  if(pref1)
  {
    x = x + "\nSame Gender Only";
  }
  else
  {
    x = x + "\nDo not need Same Gender";
  }

  //on the hill preference
  if(pref2)
  {
    x = x + "\nLiving on the hill";
  }
  else
  {
    x = x + "\nLiving off campus";
  }

  if(pref3)
  {
    x = x + "\nNight Owl";
  }
  else
  {
    x = x + "\nEarly Bird";
  }

  if(pref4)
  {
    x = x + "\nFine with Alcohol";
  }
  else
  {
    x = x + "\nNo Alcohol";
  }

  if(pref5)
  {
    x = x + "\nPets Allowed";
  }
  else
  {
    x = x + "\nPets not allowed";
  }

  x = x +"\n\nBio: "+bio

 swal({
   title: username,
  text: x,
  icon: images[picId],
  // html:
  //   <img src={images[picId]}/>
   // icon: "error",
  button: "Close Profile",
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
  let usersName = user.name;
  let usersGender = user.gender;
  let usersMajor = user.major;
  let usersPhone = user.phone;
  let usersEmail = user.email;
  let usersBio = user.bio;
  let userInstagram = user.instagram;
  let userFacebook = user.facebook;
  let userDiscord = user.discord;
  let pref1 = user.samegender;
  let pref2 = user.onthehill;
  let pref3 = user.alchohol;
  let pref4 = user.pets;
  let pref5 = user.nightowl;
  let gender2;
  if(usersGender == "1")
  {
    gender2 = "Male";
  }
  else if(usersGender == "2")
  {
    gender2 = "Female";
  }
  else
  {
    gender2="Other";
  }
  return (
    <div className="card-container">
      {/* Change Image Routing!! And ProfPic Dimensions */}
      {/* <img src={require(`/Users/sreyamuppalla/Desktop/BruinMatch/bruinmatch-frontend/src/uploads/${user.articleImage}`)} alt=""/> */}
      {/* <img src={images['test1.png']} /> */}
      
      <img class="ProfilePhoto1" src={images[picId]} />
      <div className="name1">{user.name}</div>
      <div className="gender1">Gender: {gender2}</div>
      <div className="major1">Major: {user.major}</div>
      <div className="year1">Year: {user.year}</div>
      <div className="phone1">Phone: {user.phone}</div>
      <div className="email1">Email: {user.email}</div>
      {/* <div className="bio1">Bio:</div> */}
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

      
      <button type="button" className="view1" onClick={(e) => ViewButton(usersName,gender2,usersMajor,usersPhone,usersEmail,usersBio,picId,userInstagram,userFacebook,userDiscord,e,pref1,pref2,pref3,pref4,pref5)}>
      View
      </button>
      {/* <input
        type="button"
        className="view1"
        value="View"
        //onClick="alert('aaaaaaa')"
        onClick={ViewButton(user.name)}
      />       */}
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

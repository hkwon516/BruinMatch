import React, { Component, useState } from "react";
import "../Rec.css";
import styles from "../Rec.css";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from 'sweetalert';

function addProfile(user,account,message) {
  var currUser = account;
  var saved = currUser.savedProfiles;
  var notes = currUser.savedNotes;
  var index = -1;
  for(var i = 0; i < saved.length; i++){
    if(saved[i].username == user.username){
      index = i;
      break;
    }
  }

  if(message == "Unsave"){
    saved.splice(index, 1);
    notes.splice(index, 1);
    currUser.savedProfiles = saved;
    currUser.savedNotes = notes;
    // saved = saved.filter(rmUser => rmUser.username != user.username);
    axios
    .put(`http://localhost:8082/api/users/saved/${account.username}`, currUser)
    .then((res) => {});
  }else if(index == -1){
    let x = message+"d "+ user.name + "'s profile!";
    swal({
        title:x,
        content: {
          element: "input",
          attributes: {
            placeholder: "Why you saved this profile",
          },
        },
      }).then((value) => {
        //the notes is written in value
        saved.push(user);
        notes.push(value);
        currUser.savedProfiles = saved;
        currUser.savedNotes = notes;
        axios
        .put(`http://localhost:8082/api/users/saved/${account.username}`, currUser)
        .then((res) => {});
      });
      
  }  
 }

function ViewButton(username, gender1, major, phone, email, insta, fb, discord, pref1, pref2, pref3, pref4, pref5, picId, bio, notes, putNote){
  let x = "Gender: "+gender1+"\nMajor: "
 +major+"\nPhone: "+phone+"\nEmail: "+email+"\nInstagram: "+insta+
 "\nFacebook: "+fb+"\nDiscord: "+discord+"\n\nPreferences: ";


 //  //same gender only preference
 if(pref1)
 {
   x = x + "\nSame Gender Only";
 }
 else
 {
   x = x + "\nDo not need Same Gender";
 }
 
//  //on the hill preference
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

 x = x + "\n\nBio:"  + bio;

 if(putNote){
  x = x +"\n\nNotes: " + notes;
 }

  
  swal({
     title: username,
     text: x,
     icon: images[picId],
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
  let likeMessage = "Save";
  var user = props.user;
  var account = props.account;
  let picId = user.articleImage;
  let usersName = user.name;
  let usersGender = user.gender;
  let usersMajor = user.major;
  let usersPhone = user.phone;
  let usersEmail = user.email;
  let usersBio = user.bio;
  let userInstagram = user.instagram;
  let userDiscord = user.discord;
  let userFacebook = user.facebook;
  let pref1 = user.samegender;
  let pref2 = user.onthehill;
  let pref3 = user.alchohol;
  let pref4 = user.pets;
  let pref5 = user.nightowl;
  var notes = props.note;
  var putNote = props.putNote;
  let gender2;

  if(account.savedProfiles != null){
    for (var j = 0; j < account.savedProfiles.length; j++) {
      if(account.savedProfiles[j].username == user.username){
        likeMessage = "Unsave";
      }
    }
  }

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
//  console.log(notes)
 return (
   <div className="card-container">
    
     <img class="ProfilePhoto1" src={images[picId]} />
     <div className="name1">{user.name}</div>
     <div className="gender1">Gender: {gender2}</div>
     <div className="major1">Major: {user.major}</div>
     <div className="year1">Year: {user.year}</div>
     <div className="phone1">Phone: {user.phone}</div>
     <div className="email1">Email: {user.email}</div>
 
   <button type="button" className="save1" onClick={(e) => addProfile(user,account,likeMessage,e)}>
     {likeMessage}
     </button>

    <button type="button" className="view1"  onClick={(e) => ViewButton(usersName, gender2, usersMajor, usersPhone,
      usersEmail, userInstagram, userDiscord, userFacebook, pref1, pref2, pref3, pref4, pref5, picId, usersBio, notes, putNote)}>
     View
     </button>
   </div>
 );
};
 
export default UserProfile;

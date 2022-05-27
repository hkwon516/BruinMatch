import React, { Component } from "react";
import "../Rec.css";
import styles from "../Rec.css";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from 'sweetalert';
 
//var account = ""; 

function addProfile(user,account,message) {
 var currUser = account;
 var saved = currUser.savedProfiles;
 saved.push(user);
 currUser.savedProfiles = saved;
 axios
   .put(`http://localhost:8082/api/users/saved/${account.username}`, currUser)
   .then((res) => {});

   var notes = null;
   let x = message+"d "+ user.name + "'s profile!";
    swal({
     title:x,
     content: {
       element: "input",
       attributes: {
         placeholder: "Why you liked this profile",
       },
     },
   }).then(input => notes = input);
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
 
function SaveButton(name)
{
 
 var notes = null;
 let x = "Liked "+ name + "'s profile!";
  swal({
   title:x,
   content: {
     element: "input",
     attributes: {
       placeholder: "Why you liked this profile",
     },
   },
 }).then(input => notes = input);
 
 
}
 
function importAllImages(r) {
 let images = {};
 r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
 return images;
}
 
const images = importAllImages(require.context('../../../bruinmatch-backend/images', false, /\.(png|jpe?g|svg)$/));
 
const UserProfile = (props) => {
  var user = props.user;
 var account = props.account;
//  user = props.user;
  //account = props.account;
 console.log(account);
 let picId = user.articleImage;
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

 let likeMessage = "Like";


 for (var j = 0; j < account.savedProfiles.length; j++) {
  if(account.savedProfiles[j].username == user.username){
    likeMessage = "Unsave";
  }

  // console.log(account.savedProfiles[j].username);
  // console.log(user.username);
}

// document.getElementById("outputMessage").innerHTML=likeMessage;
//console.log(likeMessage);

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
     {/* <input
       type="button"
       className="save1"
       value="Like"
       onClick="alert('aaaaaaa')"
     /> */}

 
   <button type="button" className="save1" onClick={(e) => addProfile(user,account,likeMessage,e)}>
     {likeMessage}
     </button>
 
    
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
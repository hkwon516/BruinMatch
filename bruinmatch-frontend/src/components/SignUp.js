import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './SignUp.module.css';
import axios from 'axios';
import { Button } from 'react-native'
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import swal from 'sweetalert';

function validatePassword(password)
{
   var errors = '';
  // null check
  if (!password) {
      errors = 'This field cannot be empty.';
      return true;
}
// After null checking, check length
else if (password.length < 8) {
 errors = 'The password provided is not long enough.';
 return true;
  } 
  //check if there is at least one capital letter, at least one lowercase letter, and digit
  else if(!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/))
  {
    return true;
  }
  return false;
}

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password:'',
      name:'',
      gender:'',
      major: '',
      year: '',
      phone: '',
      email: '',
      bio: '',
      instagram: '',
      discord: '',
      facebook: '',
      samegender: '',
      onthehill: '',
      alchohol: '',
      pets: '',
      nightowl:'',
      fileName: '',
      savedProfiles: [],
      savedNotes: []
    };
  }

  onChangeFile = e => {
    this.setState({["fileName"]: e.target.files[0]});
  }


  onChange = e => {
    var male = document.getElementById('male');
   var female = document.getElementById('female');
   var undef = document.getElementById('undef');

   var first = document.getElementById('first');
   var second = document.getElementById('second');
   var third = document.getElementById('third');
   var fourth = document.getElementById('fourth');
   var grad = document.getElementById('grad');


    //gender
    if(e.target.name === "male"){
      this.setState({["gender"]: 1});
      e.target.style.backgroundColor= '#2773ae';
      e.target.style.color= 'white';

      female.style.backgroundColor = 'white';
      female.style.color= '#5252529e';

      undef.style.backgroundColor = 'white'; 
      undef.style.color = '#5252529e';
      
    
    }else if(e.target.name === "female"){
      this.setState({["gender"]: 2});
      e.target.style.backgroundColor= '#2773ae';
      e.target.style.color= 'white';

      male.style.backgroundColor = 'white'; 
      male.style.color = '#5252529e';

      undef.style.backgroundColor = 'white'; 
      undef.style.color = '#5252529e';
   
    }else if(e.target.name === "undef"){
      this.setState({["gender"]: 3});
      e.target.style.backgroundColor= '#2773ae';
      e.target.style.color= 'white';

      male.style.backgroundColor = 'white';
      male.style.color= '#5252529e';

      female.style.backgroundColor = 'white';
      female.style.color= '#5252529e';
  
    }
    //year

 
    else if(e.target.name === "first"){
      this.setState({["year"]: 1, });
      e.target.style.backgroundColor= '#2773ae';
      e.target.style.color= 'white';

      second.style.backgroundColor = 'white';
      second.style.color= '#5252529e';

      third.style.backgroundColor = 'white';
      third.style.color= '#5252529e';

      fourth.style.backgroundColor = 'white';
      fourth.style.color = '#5252529e';

      grad.style.backgroundColor = 'white';
      grad.style.color= '#5252529e';
      
    }else if(e.target.name === "second"){
      this.setState({["year"]: 2});

      e.target.style.backgroundColor= '#2773ae';
      e.target.style.color= 'white';

      first.style.backgroundColor = 'white';
      first.style.color = '#5252529e';

      third.style.backgroundColor = 'white';
      third.style.color= '#5252529e';

      fourth.style.backgroundColor = 'white';
      fourth.style.color = '#5252529e';

      grad.style.backgroundColor = 'white';
      grad.style.color= '#5252529e';

    }else if(e.target.name === "third"){
      this.setState({["year"]: 3});
     
      e.target.style.backgroundColor= '#2773ae';
      e.target.style.color= 'white';

      second.style.backgroundColor = 'white';
      second.style.color = '#5252529e';

      first.style.backgroundColor = 'white';
      first.style.color= '#5252529e';

      fourth.style.backgroundColor = 'white';
      fourth.style.color = '#5252529e';

      grad.style.backgroundColor = 'white';
      grad.style.color= '#5252529e';
    }else if(e.target.name === "fourth"){
      this.setState({["year"]: 4});

      e.target.style.backgroundColor= '#2773ae';
      e.target.style.color= 'white';

      second.style.backgroundColor = 'white';
      second.style.color = '#5252529e';

      third.style.backgroundColor = 'white';
      third.style.color= '#5252529e';

      first.style.backgroundColor = 'white';
      first.style.color = '#5252529e';

      grad.style.backgroundColor = 'white';
      grad.style.color= '#5252529e';
    }else if(e.target.name === "grad"){
      this.setState({["year"]: 5});

      e.target.style.backgroundColor= '#2773ae';
      e.target.style.color= 'white';

      second.style.backgroundColor = 'white';
      second.style.color = '#5252529e';

      third.style.backgroundColor = 'white';
      third.style.color= '#5252529e';

      fourth.style.backgroundColor = 'white';
      fourth.style.color = '#5252529e';

      first.style.backgroundColor = 'white';
      first.style.color= '#5252529e';
    }

    else if(e.target.name[0] == "x" && e.target.value == "t"){
      this.setState({[e.target.name.substring(1)]: true});
    }
    else if(e.target.name[0] == "x" && e.target.value == "f"){
      this.setState({[e.target.name.substring(1)]: false});
    }

    else{
      this.setState({[e.target.name]: e.target.value});
    }
    
  };



  onSubmit = e => {
    console.log(this.state)
    e.preventDefault();

    const data = {
      username: this.state.username,
      password: this.state.password,
      name: this.state.name,
      gender: this.state.gender,
      major: this.state.major,
      year: this.state.year,
      phone: this.state.phone,
      email: this.state.email,
      bio : this.state.bio,
      instagram: this.state.instagram,
      discord : this.state.discord,
      facebook: this.state.facebook,
      samegender: this.state.samegender,
      onthehill: this.state.onthehill,
      alchohol: this.state.alchohol,
      pets: this.state.pets,
      nightowl: this.state.nightowl,
      savedProfiles: [],
      savedNotes: []
    };

    var tempUsers;

    axios
      .get('http://localhost:8082/api/users/allUsers')
      .then(res => {
        tempUsers = res.data;
      })
      .catch(err =>{
        console.log('Error from Log In');
      })


      var found = false;
      var usrnm;
      /*for (var i = 0; i < tempUsers.length; i++) {
          if(tempUsers[i].username == data.username){
            found = true;
          }
      }*/
      if(found){
        //ADD CODE TO TELL USERNAME ALREADY EXISTS
        console.log("username already exists");
      }else if(validatePassword(this.state.password))
    {
      console.log("invalid password");
      swal({
        title: "Invalid Password",
        text: "Password must be minimum of 8 characters\n Must have at least one capital letter, lowercase letter, and digit",
        icon: "error",
        button: "Try again",
      });
    }

    else {

      const formData = new FormData();
      formData.append("username", this.state.username);
      formData.append("password", this.state.password);
      formData.append("name", this.state.name);
      formData.append("gender", this.state.gender);
      formData.append("major", this.state.major);
      formData.append("year", this.state.year);
      formData.append("phone", this.state.phone);
      formData.append("email", this.state.email);
      formData.append("bio", this.state.bio);
      formData.append("instagram", this.state.instagram);
      formData.append("discord", this.state.discord);
      formData.append("facebook", this.state.facebook);
      formData.append("samegender", this.state.samegender);
      formData.append("onthehill", this.state.onthehill);
      formData.append("alchohol", this.state.alchohol);
      formData.append("pets", this.state.pets);
      formData.append("nightowl", this.state.nightowl);
      formData.append("articleImage", this.state.fileName);

    axios
      .post('http://localhost:8082/api/users/signup', formData)
      .then(res => {
        this.setState({
          username: '',
          password:'',
          name:'',
          gender:'',
          major: '',
          year: '',
          phone: '',
          email: '',
          bio: '',
          instagram: '',
          discord: '',
          facebook: '',
          samegender: '',
          onthehill: '',
          alchohol: '',
          pets: '',
          nightowl:''
        })



        //ADD CODE HERE TO CLEAR OUT RADIO BUTTONS

        var radioButtons = document.querySelectorAll('input[type="radio"]');
        for(var i=0;i<radioButtons.length;i++)
          radioButtons[i].checked = false;


        this.props.history.push(`/login`);
        window.location.reload(false);
      })
    
      .catch(err => {
        console.log("Error in CreateUser!");
      })
    }
    
  };
 

  render() {
    
    
   
    return (
    
      <div className={styles.zoom}>
        <div className="container">
        <div className={styles.TopBanner}>
              <div className= {styles.topBannerText} >
                BruinMatch
              </div>
          </div>
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
            </div>
            <div className="col-md-8 m-auto">

              <form noValidate onSubmit={this.onSubmit} encType="multipart/form-data">
              <div className= {styles.FullFrame}>
        </div>
              <div className= "Profile section">
              <input  type="button" className={styles.SetProfileButton} name="setprofile" onClick={this.onChange} value= "Set Profile Photo"/>
                  <div className= {styles.ProfilePhoto}>
                   
                  </div>
                 
             
                </div>

                <div className = {styles.Frame4}>
                <div className= {styles.SignUpText}>
                  Sign Up
                </div>

              {/* Profile Pic Button */}
              <div className='form-group'>
                  <label htmlFor='file'>
                    Choose Image
                  </label>
                  <input
                    type='file'
                    fileName='articleImage'
                    className='form-control-file'
                    onChange={this.onChangeFile}
                  />
                </div>

              <div className= {styles.UserNameText}>
                  Username*
                </div>
              <div className='form-group'>
                  <input
                    type='text'
                    
                    name='username'
                    className={styles.username}
                    value={this.state.username}
                    onChange={this.onChange}
                  />
                </div>
                <br />


                <div className= {styles.PasswordText}>
                  Password*
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    name='password'
                    className={styles.password}
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                </div>
                </div>
             
               
              <div className= {styles.Frame2}>
                <div className={"name"}>
                  <div className={styles.Name}>
                    Name*
                  </div>
                  <div className="nameinput">
                    <input
                      type='text'
                      name='name'
                      className={styles.NameInput}
                      value={this.state.name}
                      onChange={this.onChange}
                    />
                  </div>
                </div>

                <div className={"email"}>
                  <div className={styles.Email}>
                    Email*
                  </div>
                  <div className={"emailinput"}>
                    <input
                      type='text'
                      name='email'
                      className={styles.EmailInput}
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                  </div>
                </div>
                

                <div className= {"major"}>
                  <div className={styles.Major}>
                    Major*
                  </div>
                  <div className={"majorinput"}>
                    <input
                      type='text'
                      name='major'
                      className={styles.MajorInput}
                      value={this.state.major}
                      onChange={this.onChange}
                    />
                  </div>
                </div>

                
                <div className={styles.CreateProfile}>
                  Create Profile
                </div>

                
                <div className={"phone"}>
                  <div className={styles.Phone}>
                    Phone*
                  </div>
                  <div className={"phoneinput"}>
                    <input
                      type='text'
                      name='phone'
                      className={styles.PhoneInput}
                      value={this.state.phone}
                      onChange={this.onChange}
                    />
                </div> 
                
                <div className= "year">
                  <div className={styles.Year}>
                    Year*
                  </div>
                         <input  type="button" className={styles.first} name="first" onClick={this.onChange} value= "1st" id= "first"/>
                         <input  type="button" className={styles.second} name="second" onClick={this.onChange} value= "2nd" id= "second"/> 
                         <input  type="button" className={styles.third} name="third" onClick={this.onChange} value= "3rd" id= "third"/> 
                         <input  type="button" className={styles.fourth} name="fourth" onClick={this.onChange} value= "4th" id= "fourth"/> 
                         <input  type="button" className={styles.Grad} name="grad" onClick={this.onChange} value= "Grad" id= "grad"/> 

                         
      
                       
                </div>

                 <div className="Gender">
                  <div className={styles.Gender}>
                    Gender*
                  </div>
                         
                         <input  type="button" className={styles.male} name="male" onClick={this.onChange} value= "Male" id= "male"/> 
                         <input  type="button" className={styles.female} name="female" onClick={this.onChange} value= "Female"  id= "female"/> 
                         <input  type="button" className={styles.undef} name="undef" onClick={this.onChange} value= "Not Defined"  id= "undef"/>
                 
                  </div>
                
                
                <div className={"bio"}>
                  <div className={styles.Bio}>
                    Bio*
                  </div>
                  <div className={"bioinput"}>
                   <textarea
                      type="textarea"
                      name='bio'
                     className={styles.BioInput}
                     value={this.state.bio}
                      onChange={this.onChange}
                    />
                  </div>
                </div>

                <div className={"instagram"}>
                  <div className={styles.Instagram}>
                    Instagram
                  </div>
                  <div className={"instagraminput"}>
                   <input
                      type="text"
                      name='instagram'
                      className={styles.InstagramInput}
                      value={this.state.instagram}
                      onChange={this.onChange}
                    />
                  </div>
                </div>

                <div className={"discord"}>
                  <div className={styles.Discord}>
                    Discord
                  </div>
                  <div className={"discordinput"}>
                   <input
                      type="text"
                      name='discord'
                     className={styles.DiscordInput}
                     value={this.state.discord}
                      onChange={this.onChange}
                    />
                  </div>
                </div>

                <div className={"facebook"}>
                  <div className={styles.Facebook}>
                    Facebook
                  </div>
                  <div className={"faceookinput"}>
                   <input
                      type="text"
                      name='facebook'
                     className={styles.FacebookInput}
                     value={this.state.facebook}
                      onChange={this.onChange}
                    />
                  </div>
                </div>
               
                <input
                    type="submit"
                    value = "Create Account"
                    className={styles.SubmitButton}
                />
                
               </div>
               </div>

               
              


               <div className={styles.Frame3}>

                <div className={styles.Preferences}>
                 </div>
                 <div className= {styles.PreferencesText}> Preferences</div>
                 <div className={styles.Option1}>Same Gender?</div>
                 <div className={styles.Option2}>On the Hill?</div>
                 <div className={styles.Option3}>Alcohol?</div>
                 <div className={styles.Option4}>Pets?</div>
                 <div className={styles.Option5}>Night Owl?</div>

                 <div className={styles.Switchtext}>Yes</div>
                 <div className={styles.Switchtextno}>No</div>
                    {/*
                    Option Order:
                    1. same gender
                    2. on the hill
                    3. alchohol
                    4. pets
                    5. nightowl
                    */}                 
                    <div>
                      <input className= {styles.Switch1} type="radio" name= "xsamegender" value="t" onClick={this.onChange}/>
                      <input className= {styles.Switch1No} type="radio" name= "xsamegender" value="f" onClick={this.onChange}/>
                      <input className= {styles.Switch2} type="radio" name= "xonthehill" value="t" onClick={this.onChange}/>
                      <input className= {styles.Switch2No} type="radio" name= "xonthehill" value="f" onClick={this.onChange}/>
                      <input className= {styles.Switch3} type="radio" name= "xalchohol" value="t" onClick={this.onChange}/>
                      <input className= {styles.Switch3No} type="radio" name= "xalchohol" value="f" onClick={this.onChange}/>
                      <input className= {styles.Switch4} type="radio" name= "xpets" value="t" onClick={this.onChange}/>
                      <input className= {styles.Switch4No} type="radio" name= "xpets" value="f" onClick={this.onChange}/>
                      <input className= {styles.Switch5} type="radio" name= "xnightowl" value="t" onClick={this.onChange}/>
                      <input className= {styles.Switch5No} type="radio" name= "xnightowl" value="f" onClick={this.onChange}/>
                </div>
                </div>

              </form>
         
          </div>
          </div>
        </div>
     
      </div>
      
    
      
    );
    
  }
}

export default SignUp;
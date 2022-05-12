import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './SignUp.module.css';
import axios from 'axios';
import { Button } from 'react-native'
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';




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
      nightowl:''
    };
  }

  onChange = e => {
    //gender
    if(e.target.name === "male"){
      this.setState({["gender"]: 1});
    }else if(e.target.name === "female"){
      this.setState({["gender"]: 2});
    }else if(e.target.name === "undef"){
      this.setState({["gender"]: 3});
    }
    //year
    else if(e.target.name === "first"){
      this.setState({["year"]: 1});
    }else if(e.target.name === "second"){
      this.setState({["year"]: 2});
    }else if(e.target.name === "third"){
      this.setState({["year"]: 3});
    }else if(e.target.name === "fourth"){
      this.setState({["year"]: 4});
    }else if(e.target.name === "grad"){
      this.setState({["year"]: 5});
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
      nightowl: this.state.nightowl
    };

    axios
      .post('http://localhost:8082/api/users/signup', data)
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
        this.props.history.push('/rec');
        window.location.reload(false);
      })
      .catch(err => {
        console.log("Error in CreateUser!");
      })
  };

  render() {
    return (
    
      <div className="SignUp">
        <div className="container">
        <div className= {styles.FullFrame}>
        </div>
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

              <form noValidate onSubmit={this.onSubmit}>
              <div className= {styles.FullFrame}>
        </div>
              <div className= "Profile section">
                <div className= {styles.SetProfileButton}>
                  </div>
                  <div className= {styles.ProfilePhoto}>
                  </div>
                  <div className= {styles.PhotoButtonText}>
                    Set Profile Photo
                  </div>
             
                </div>

                <div className = {styles.Frame4}>
                <div className= {styles.SignUpText}>
                  Sign Up
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
                         <input  type="button" className={styles.first} name="first" onClick={this.onChange}/>
                         <input  type="button" className={styles.second} name="second" onClick={this.onChange}/>
                         <input  type="button" className={styles.third} name="third" onClick={this.onChange}/>
                         <input  type="button" className={styles.fourth} name="fourth" onClick={this.onChange}/>
                         <input  type="button" className={styles.Grad} name="grad" onClick={this.onChange}/>
                  <div className={styles.gradstring}>Grad</div>
                  <div className={styles.firststring}>1st</div>
                  <div className={styles.secondstring}>2nd</div>
                  <div className={styles.thirdstring}>3rd</div>
                  <div className={styles.fourthstring}>4th</div>
                </div>

                 <div className="Gender">
                  <div className={styles.Gender}>
                    Gender*
                  </div>
                         
                         <input  type="button" className={styles.male} name="male" onClick={this.onChange}/>
                         <input  type="button" className={styles.female} name="female" onClick={this.onChange}/>
                         <input  type="button" className={styles.undef} name="undef" onClick={this.onChange}/>
                    <div className= {styles.Male}>Male</div>
                    <div className= {styles.Female}>Female</div>
                    <div className= {styles.NotDefined}>Not Defined</div>
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

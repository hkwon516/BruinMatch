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
      //bannerMessage: 'BruinMatch',
      password:'',
      name:'',
      email: '',
      major:'',
      phone:'',
      bio:''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      username: this.state.username,
      password: this.state.password,
      name: this.state.name,
      email: this.state.email,
      major: this.state.major,
      phone: this.state.phone,
      bio : this.state.bio
    };

    axios
      .post('http://localhost:8082/api/users/signup', data)
      .then(res => {
        this.setState({
          username: '',
          password:'',
          name:'',
          email: '',
          major:'',
          phone:'',
          bio:''
        })
        this.props.history.push('/signup');
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
              {/* <Link to="/" className="btn btn-outline-warning float-left">
                  Show BooK List
              </Link> */}
            </div>
            <div className="col-md-8 m-auto">
           
              

              <form noValidate onSubmit={this.onSubmit}>
              
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
                      //placeholder='Full Name'
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
                      //placeholder='Email'
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
                      //placeholder='Email'
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
                      //placeholder='Email'
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
                  <form>
                        <input  type="button" className={styles.Grad}  
                        />
                         <input  type="button" className={styles.first}  
                        />
                         <input  type="button" className={styles.second}  
                        />
                       
                        <input  type="button" className={styles.third}  
                        />
                         <input  type="button" className={styles.fourth}  
                        />
                        

                  
                    </form>
                   

                 

                  <div className={styles.gradstring}>
                    Grad
                  </div>

                  <div className={styles.firststring}>
                    1st
                  </div>

                  <div className={styles.secondstring}>
                    2nd
                  </div>

                  <div className={styles.thirdstring}>
                    3rd
                  </div>

                  <div className={styles.fourthstring}>
                    4th
                  </div>

                  <form>
                        <input  type="button" className={styles.male}  
                        />
                         <input  type="button" className={styles.female}  
                        />
                         <input  type="button" className={styles.undef}  
                        />

                    </form>
                   
                </div>

                <div className="Gender">
                  <div className={styles.Gender}>
                    Gender*
                  </div>

                  <form>
                        <input  type="button" className={styles.male}  
                        />
                         <input  type="button" className={styles.female}  
                        />
                         <input  type="button" className={styles.undef}  
                        />

                    </form>
                   
                    <div className= {styles.Male}>
                        Male
                    </div>

                    <div className= {styles.Female}>
                        Female
                    </div>

                  
                    <div className= {styles.NotDefined}>
                        Not Defined
                    </div>

                </div>
                
                
                <div className={"bio"}>
                  <div className={styles.Bio}>
                    Bio*
                  </div>
                  <div className={"bioinput"}>
                   <textarea
                      type="textarea"
                      //placeholder='Email'
                      name='bio'
                     className={styles.BioInput}
                     value={this.state.bio}
                      onChange={this.onChange}
                    />
                  </div>
                </div>
               
                <input
                    type="submit"
                    text= 'hi'
                    className={styles.SubmitButton}
                />
                 <div className= {styles.SubmitText}>
                   Create
                </div>
               </div>
               </div>

               
              


               <div className={styles.Frame3}>

                <div className={styles.Preferences}>
                 </div>
                 <div className= {styles.PreferencesText}>
                    Preferences
                   </div>
                 <div className={styles.Option1}>
                   Preference1
                 </div>
                 <div className={styles.Option2}>
                   Preference2
                 </div>
                 <div className={styles.Option3}>
                   Preference3
                 </div>
                 <div className={styles.Option4}>
                   Preference4
                 </div>
                 <div className={styles.Option5}>
                   Preference5
                 </div>

                 <div className= "switches">

                 
                   <div className= {styles.Switch1}>
                     
                   </div>
                   <div className= {styles.Switch1No}>
                     </div>
                  
                   <div className= {styles.Switch2}>
                     
                   </div>
                   <div className= {styles.Switch2No}>
                     
                     </div>
                     <div className= {styles.Switch3}>
                     
                     </div>
                     <div className= {styles.Switch3No}>
                       
                       </div>
                       <div className= {styles.Switch4}>
                     
                     </div>
                     <div className= {styles.Switch4No}>
                       
                       </div>
                       <div className= {styles.Switch5}>
                     
                     </div>
                     <div className= {styles.Switch5No}>
                       
                       </div>

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
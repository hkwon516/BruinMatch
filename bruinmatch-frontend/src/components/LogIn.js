import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './login.module.css';
import axios from 'axios';
import image from './bannerPic.png'
import image2 from './dormPic.png'
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


class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password:''
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
    };

    axios
      .get('http://localhost:8082/api/users/login')
      .then(res => {
          var found = false;
          var usrnm;
          for (var i = 0; i < res.data.length; i++) {
              if(res.data[i].username == data.username && res.data[i].password == data.password){
                usrnm = res.data[i].username;
                found = true;
              }
          }
          if(found){
            console.log("found")
            this.props.history.push(`/rec/${usrnm}`);
            window.location.reload(false);
          }else if(validatePassword(data.password)){
            this.props.history.push('/login');
            console.log("invalid password")
            swal({
              title: "Invalid Password",
              text: "Password must be minimum of 8 characters\n Must have at least one capital letter, lowercase letter, and digit",
              icon: "error",
              button: "Try again",
            });
 
          }
          else
          {
            this.props.history.push('/login');
            console.log("not found")
            swal({
              title: "Incorrect Username/Password",
              text: "Please Try Again",
              icon: "error",
              button: "Try again",
            });
          }
      })
      .catch(err =>{
        console.log('Error from Log In');
      })
    
  };

  render() {
    return (
      <div className="LogIn">
        <div className={styles.container}>
          <div className={styles.topRectangle}>
            <div className={styles.middleRectangle}>
              <div className={styles.middleText}>
              <br />
              {/* <Link to="/" className="btn btn-outline-warning float-left">
                  Show BooK List
              </Link> */}
              <a href='/login'>BruinMatch</a>
            
            </div> 
            </div>

            <div className={styles.imageBanner}>
            <img src={image} alt = "UCLA Housing Building"/>
            <div className={styles.imageText}>
              Welcome
            </div>
            </div>
            <div className={styles.points}>
              {/* <div className={styles.circlePoint}> */}
             </div> 
            {/* </div> */}
            <div className={styles.points}>
              {/* <div className={styles.circlePointTwo}> */}
              Best Roomate Finder! &emsp; Meet Students around UCLA!
            {/* </div> */}
            </div>

            

            

            <div className={"col-md-8 m-auto"}>
              <h1 className={styles.loginText}>
                <div className={styles.image2}>
              <img src={image2} alt = "UCLA Housing Dorm Room"/>
              </div>
              {/* Log In */}
              </h1>
              <div className={styles.loginLast}>
              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                <h1>Username</h1>
                  <input
                    type='text'
                    // placeholder='Username'
                    name='username'
                    className={styles.box}
                    value={this.state.username}
                    onChange={this.onChange}
                  />
                </div>
                {/* <br /> */}

                <div className='form-group'>
                <h1>Password</h1>
                  <input
                    type='text'
                    // placeholder='Password'
                    name='password'
                    className={styles.box}
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                </div>
                <br />
                
                <input
                    type="submit"
                    className={styles.button}
                    value="Login"
                />
                {/* <input 
                type="submit"
                className={styles.createAccount}
                value="Create Account"
                /> */}
              </form>
              <div className={styles.createAccount}>
             <a href='/SignUp'>Create Account</a>
             </div>
              </div>
          </div>
          </div>
        </div>
        </div>
      
    );
  }
}

export default LogIn;
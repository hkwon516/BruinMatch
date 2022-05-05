import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './login.module.css';
import axios from 'axios';
import image from './bannerPic.png'
import image2 from './dormPic.png'

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
          for (var i = 0; i < res.data.length; i++) {
              if(res.data[i].username == data.username && res.data[i].password == data.password){
                  found = true;
              }
          }
          if(found){
            console.log("found")
            this.props.history.push('/rec');
          }else{
            this.props.history.push('/login');
            console.log("not found")
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
              BruinMatch
            
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
              </form>
              </div>
          </div>
          </div>
        </div>
        </div>
      
    );
  }
}

export default LogIn;
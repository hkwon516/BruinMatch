import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


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
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              {/* <Link to="/" className="btn btn-outline-warning float-left">
                  Show BooK List
              </Link> */}
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Username'
                    name='username'
                    className='form-control'
                    value={this.state.username}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Password'
                    name='password'
                    className='form-control'
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                </div>

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LogIn;
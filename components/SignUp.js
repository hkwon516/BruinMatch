import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password:'',
      name:''
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
      name: this.state.name
    };

    axios
      .post('http://localhost:8082/api/users/signup', data)
      .then(res => {
        this.setState({
          username: '',
          password:'',
          name:''
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
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              {/* <Link to="/" className="btn btn-outline-warning float-left">
                  Show BooK List
              </Link> */}
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>

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

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Full Name'
                    name='name'
                    className='form-control'
                    value={this.state.name}
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

export default SignUp;
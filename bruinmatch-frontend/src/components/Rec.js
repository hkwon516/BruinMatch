import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UserProfile from './UserProfile';

class Rec extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/users/rec')
      .then(res => {
        this.setState({
          users: res.data
        })
        this.props.history.push('/rec');
      })
      .catch(err =>{
        console.log('Error from Rec');
      })
  };


  render() {
    const users = this.state.users;
    console.log("PrintUser: " + users);
    let userList;

    if(!users) {
        userList = "there is no user record!";
    } else {
        console.log('Hello')
      userList = users.map((user, k) =>
        <UserProfile user={user} key={k} />
      );
    }

    return (
      <div className="ShowBookList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Reccomondations</h2>
            </div>

          </div>

          <div className="list">
                {userList}
          </div>
        </div>
      </div>
    );
  }
}

export default Rec;
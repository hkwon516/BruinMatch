import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const UserProfile = (props) => {
    const  user  = props.user;

    return(
        <div className="card-container">
            <img src="https://cdrd.edu.np/wp-content/uploads/2019/05/person-gray-photo-placeholder-woman-vector-22964655.jpg" alt="" />
            <div className="desc">
                <h2>
                    {user.username}
                </h2>
                <h3>{user.name}</h3>
                <p>{user.password}</p>
            </div>
        </div>
    )
};

export default UserProfile;
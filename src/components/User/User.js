import React from 'react';
import { Link } from 'react-router-dom';
import './User.css'

const User = ({user}) => {
    const {id ,name,username,email} = user;
    return (
        <div className='userst'>
            <h3> Name : {name}</h3>
            <h2> Email : {email}</h2>
            <h5> UserName : <Link to={`/user/${id}`}>{username}</Link></h5>
        </div>
    );
};

export default User;
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const User = useLoaderData();
    return (
        <div>
            <h1>Details About {User.name}</h1>
            <p>Call him/her : {User.phone} </p>
            <h2>Everything you need to know about user details</h2>
        </div>
    );
};

export default UserDetails;
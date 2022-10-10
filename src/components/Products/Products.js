import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';

const Products = () => {
    const users = useLoaderData();
    return (
        <div>
            <h1>Total product user : {users.length} </h1>
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
        </div>
    );
};

export default Products;
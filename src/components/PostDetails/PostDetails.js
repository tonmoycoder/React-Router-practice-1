import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
  const post = useLoaderData();
  const { id, title, body , userId } = post;
  const navigate = useNavigate();
  const HandlePost =() =>{
    navigate(`/user/${userId}`)
  }
  return (
    <div>
      <h4>Details about post : {id}</h4>
      <p>{title}</p>
      <p><small>{body}</small></p>
      <button onClick={HandlePost}>Get the author name</button>
    </div>
  );
};

export default PostDetails;

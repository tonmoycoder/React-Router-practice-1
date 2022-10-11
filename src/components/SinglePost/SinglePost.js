import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SinglePost.css';

const SinglePost = ({ post }) => {
  const { id, title, body } = post;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div className="post">
      <p>{title} </p>
      <p>
        <small>{body}</small>
      </p>
      {/* <Link to={`/post/${id}`}>
        <button>show details</button>
      </Link>
       */}
       <Link to={`/post/${id}`}>Visit : {id}</Link>
        <button onClick={handleNavigate}>show details</button>
      
    </div>
  );
};

export default SinglePost;

import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SinglePost from '../SinglePost/SinglePost';

const Post = () => {
  const posts = useLoaderData();
  return (
    <div>
      <h3>lot of post here</h3>
      {posts.map((post) => (
        <SinglePost key={post.id} post={post}></SinglePost>
      ))}
    </div>
  );
};

export default Post;

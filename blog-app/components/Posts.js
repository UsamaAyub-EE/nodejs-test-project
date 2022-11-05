import React from 'react';

export const Posts = ({ posts, deletePost }) => {
  console.log('posts length:::', posts.length);
  if (posts.length === 0) return null;

  const PostRow = (post, index) => {
    return (
      <div>
        <h2>{post.title}</h2>
        <h4>{post.content}</h4>
        <h4>{post._id}</h4>
        <button type="button" onClick= {(e) => deletePost(post._id)} className="btn btn-danger">Delete</button>
      </div>
    );
  };

  const postTable = posts.map((post, index) => PostRow(post, index));

  return (
    <div className='container'>
      <h1>Posts</h1>
      <div>{postTable}</div>
    </div>
  );
};

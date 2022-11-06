import React from 'react';

export const Posts = ({ posts, deletePost, onEditClick }) => {
  console.log('posts length:::', posts.length);
  if (posts.length === 0) return null;

  const PostRow = (post, index) => {
    return (
      <div>
        <h2 style={{color: 'rgb(25, 103, 25)', fontWeight: 'bold'}} >{post.title}</h2>
        <h4>{post.content}</h4>
        <button type="button" onClick= {(e) => deletePost(post._id)} className="btn btn-danger margin-btn">Delete</button>
        <button type="button" onClick= {(e) => onEditClick(post)} className="btn btn-warning margin-btn">Edit</button>
      </div>
    );
  };

  const postTable = posts.map((post, index) => PostRow(post, index));

  return (
    <div className='container'>
      <hr class="hr" />
      <h1 className='heading-posts' >Posts</h1>
      <hr class="hr" />
      <div>{postTable}</div>
    </div>
  );
};

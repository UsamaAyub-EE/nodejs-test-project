import React from 'react';

export const Posts = ({ posts }) => {
  console.log('posts length:::', posts.length);
  if (posts.length === 0) return null;

  const PostRow = (post, index) => {
    return (
      <tr key={index} className={index % 2 === 0 ? 'odd' : 'even'}>
        <td>{index + 1}</td>
        <td>{post.title}</td>
        <td>{post.content}</td>
      </tr>
    );
  };

  const postTable = posts.map((post, index) => PostRow(post, index));

  return (
    <div className='container'>
      <h2>Posts</h2>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Post Id</th>
            <th>Title</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>{postTable}</tbody>
      </table>
    </div>
  );
};

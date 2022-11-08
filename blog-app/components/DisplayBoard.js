import { React, useContext } from 'react';
import { appContext } from './App';

export const DisplayBoard = ({ getAllPosts }) => {
  const state = useContext(appContext);
  return (
    <div className='display-board'>
      <h4>Posts Created</h4>
      <div className='number'>{state.posts.length}</div>
      <div className='btn'>
        <button
          type='button'
          onClick={e => getAllPosts()}
          className='btn btn-warning'
        >
          Get all posts
        </button>
      </div>
    </div>
  );
};

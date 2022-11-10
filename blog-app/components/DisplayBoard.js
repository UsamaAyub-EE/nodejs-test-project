import { React, useContext, useMemo } from 'react';
import { appContext } from './App';

const expensiveCalculation = (lenght) => {
  console.log('preforming calculation');
  console.log('done');
  return lenght;
};

export const DisplayBoard = ({ getAllPosts }) => {
  const state = useContext(appContext);
  const totalPosts = useMemo(() => expensiveCalculation(state.posts.length), [state.posts.length]);

  return (
    <div className='display-board'>
      <h4>Posts Created</h4>
      <div className='number'>{totalPosts}</div>
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

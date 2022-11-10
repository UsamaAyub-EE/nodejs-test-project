import React from 'react';
import { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './Header';
import { Posts } from './Posts';
import { DisplayBoard } from './DisplayBoard';
import CreatePost from './CreatePost';
import {
  fetchPosts,
  submitPost,
  destroyPost,
  updatePost,
} from '../services/PostService';

export const appContext = createContext();

const App = () => {
  const [posts, setPosts] = useState([]);
  const [state, setState] = useState({
    post: { title: '', content: '' },
    postID: null,
    edit: false,
  });

  const createPost = e => {
    if (state.edit) {
      updatePost(state.post, state.postID).then(response => {
        console.log(response);
      });
    } else {
      submitPost(state.post).then(response => {
        console.log(response);
      });
    }
    getAllPosts();
    setState({
      ...state,
      post: { title: '', content: '' },
      edit: false,
    });
  };

  const getAllPosts = () => {
    fetchPosts().then(posts => {
      console.log(posts);
      setPosts(posts);
    });
  };

  const deletePost = postID => {
    destroyPost(postID).then(response => {
      console.log(response);
      getAllPosts();
    });
  };

  const onChangeForm = e => {
    let post = state.post;
    if (e.target.name === 'title') {
      post.title = e.target.value;
    } else if (e.target.name === 'content') {
      post.content = e.target.value;
    }
    setState({ ...state, post: post });
  };

  const onEditClick = post => {
    let tempPost = { title: post.title, content: post.content };
    setState({ post: tempPost, edit: true, postID: post._id });
  };

  const onCancelClick = () => {
    setState({ ...state, post: { title: '', content: '' }, edit: false });
  };

  return (
    <appContext.Provider value={{...state, posts: posts}}>
      <div className='App'>
        <Header></Header>
        <div className='container mrgntop'>
          <div className='row'>
            <div className='col-md-8'>
              <CreatePost
                onChangeForm={onChangeForm}
                createPost={createPost}
                onCancelClick={onCancelClick}
              ></CreatePost>
            </div>
            <div className='col-md-4'>
              <DisplayBoard getAllPosts={getAllPosts}></DisplayBoard>
            </div>
          </div>
        </div>
        <div className='container mrgnbtm'>
          <Posts
            deletePost={deletePost}
            onEditClick={onEditClick}
            onCancelClick={onCancelClick}
          ></Posts>
        </div>
      </div>
    </appContext.Provider>
  );
};

export default App;

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './Header';
import { Posts } from './Posts';
import { DisplayBoard } from './DisplayBoard';
import CreatePost from './CreatePost';
import {
  getAllPosts,
  createPost,
  deletePost,
  updatePost,
} from '../services/PostService';

class App extends Component {
  state = {
    post: {},
    posts: [],
    postID: null,
    numberOfPosts: 0,
    edit: false,
  };

  createPost = e => {
    if (this.state.edit) {
      this.setState({ edit: false });
      updatePost(this.state.post, this.state.postID).then(response => {
        console.log(response);
      });
      return;
    }
    createPost(this.state.post).then(response => {
      console.log(response);
      this.setState({ numberOfPosts: this.state.numberOfPosts + 1 });
    });
  };

  getAllPosts = () => {
    getAllPosts().then(posts => {
      console.log(posts);
      this.setState({ posts: posts, numberOfPosts: posts.length });
    });
  };

  deletePost = postID => {
    deletePost(postID).then(response => {
      console.log(response);
      this.setState({ numberOfPosts: this.state.numberOfPosts - 1 });
    });
  };

  onChangeForm = e => {
    let post = this.state.post;
    if (e.target.name === 'title') {
      post.title = e.target.value;
    } else if (e.target.name === 'content') {
      post.content = e.target.value;
    }
    this.setState({ post });
  };

  onEditClick = post => {
    this.setState({ edit: true, postID: post._id });
    let tempPost = { title: post.title, content: post.content };
    this.setState({ post: tempPost });
  };

  onCancelClick = () => {
    this.setState({ edit: false });
    this.setState({ post: { title: '', content: '' } });
  };

  render() {
    return (
      <div className='App'>
        <Header></Header>
        <div className='container mrgnbtm'>
          <div className='row'>
            <div className='col-md-8'>
              <CreatePost
                post={this.state.post}
                onChangeForm={this.onChangeForm}
                createPost={this.createPost}
                edit={this.state.edit}
                onCancelClick={this.onCancelClick}
              ></CreatePost>
            </div>
            <div className='col-md-4'>
              <DisplayBoard
                numberOfPosts={this.state.numberOfPosts}
                getAllPosts={this.getAllPosts}
              ></DisplayBoard>
            </div>
          </div>
        </div>
        <div className='container mrgnbtm'>
          <Posts
            posts={this.state.posts}
            deletePost={this.deletePost}
            onEditClick={this.onEditClick}
            onCancelClick={this.onCancelClick}
          ></Posts>
        </div>
      </div>
    );
  }
}

export default App;

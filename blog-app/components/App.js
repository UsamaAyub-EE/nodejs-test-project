import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './Header'
import { Posts } from './Posts'
import { DisplayBoard } from './DisplayBoard'
import CreatePost from './CreatePost'
import { getAllPosts, createPost } from '../services/PostService'

class App extends Component {

  state = {
    post: {},
    posts: [],
    numberOfPosts: 0
  }

  createPost = (e) => {
      createPost(this.state.post)
        .then(response => {
          console.log(response);
          this.setState({numberOfPosts: this.state.numberOfPosts + 1})
      });
  }

  getAllPosts = () => {
    getAllPosts()
      .then(posts => {
        console.log(posts)
        this.setState({posts: posts, numberOfPosts: posts.length})
      });
  }

  onChangeForm = (e) => {
      let post = this.state.post
      if (e.target.name === 'title') {
          post.title = e.target.value;
      } else if (e.target.name === 'content') {
          post.content = e.target.value;
      }
      this.setState({post})
  }

  render() {

    return (
      <div className="App">
        <Header></Header>
        <div className="container mrgnbtm">
          <div className="row">
            <div className="col-md-8">
                <CreatePost
                  post={this.state.post}
                  onChangeForm={this.onChangeForm}
                  createPost={this.createPost}
                  >
                </CreatePost>
            </div>
            <div className="col-md-4">
                <DisplayBoard
                  numberOfPosts={this.state.numberOfPosts}
                  getAllPosts={this.getAllPosts}
                >
                </DisplayBoard>
            </div>
          </div>
        </div>
        <div className="row mrgnbtm">
          <Posts posts={this.state.posts}></Posts>
        </div>
      </div>
    );
  }
}

export default App;

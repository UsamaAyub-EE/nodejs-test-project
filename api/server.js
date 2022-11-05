const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());

port = 3080;

mongoose.connect('mongodb://127.0.0.1:27017/postApi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: String,
  content: String,
});

const Post = mongoose.model('Post', postSchema);

app.get('/api/posts', (req, res) => {
  Post.find({}, (err, post) => {
    if (err) {
      res.send(err);
    } else {
      console.log(post);
      res.send(post);
    }
  });
});

app.get('/api/posts/:postTitle', (req, res) => {
  Post.find({ title: req.params.postTitle }, (err, post) => {
    if (err) {
      res.send(err);
    } else {
      res.send(post);
    }
  });
});

app.post('/api/post', (req, res) => {
  const reqPost = req.body.post;

  const post = new Post({
    title: reqPost.title ? reqPost.title : 'Blank',
    content: reqPost.content ? reqPost.content : 'Blank',
  });

  post.save(err => {
    if (err) {
      res.send(err);
    } else {
      res.json('post addedd');
    }
  });
});

app.delete('/api/posts/:id', (req, res) => {
  Post.deleteOne({ _id: req.params.id }, (err, post) => {
    if (err) {
      res.send(err);
    } else {
      res.json('post deleted');
    }
  });
});

app.put('/api/posts/:id', (req, res) => {
  console.log(req.params.id, req.body.post);
  Post.findByIdAndUpdate(req.params.id, {title: req.body.post.title, content: req.body.post.content}, (err, post) => {
    if (err) {
      res.send(err);
    } else {
      res.json('post updated');
    }
  });
});

app.get('/', (req, res) => {
  res.send('App Works !!!!');
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});

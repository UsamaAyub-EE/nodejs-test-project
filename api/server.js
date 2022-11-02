const express = require('express');
const app = express(),
  bodyParser = require('body-parser');
port = 3080;

// place holder for the data
const posts = [];

app.use(bodyParser.json());

app.get('/api/posts', (req, res) => {
  console.log('api/posts called!!!!');
  res.json(posts);
});

app.post('/api/post', (req, res) => {
  const post = req.body.post;
  console.log('Adding post::::::::', post);
  posts.push(post);
  res.json('post addedd');
});

app.get('/', (req, res) => {
  res.send('App Works !!!!');
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});

export async function getAllPosts() {
  const response = await fetch('/api/posts');
  return await response.json();
}

export async function createPost(data) {
  const response = await fetch(`/api/post`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ post: data }),
  });
  return await response.json();
}

export async function deletePost(postID) {
  const response = await fetch(`/api/posts/${postID}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });
  return await response.json();
}

export async function updatePost(data, postID) {
  const response = await fetch(`/api/posts/${postID}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ post: data }),
  });
  return await response.json();
}

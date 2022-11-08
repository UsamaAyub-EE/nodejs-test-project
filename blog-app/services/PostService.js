import useFetch from './useFetch';
export async function fetchPosts() {
  let url = `/api/posts`;
  let options = { method: 'GET' };
  return useFetch(url, options);
}

export async function submitPost(data) {
  let url = `/api/post`;
  let options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ post: data }),
  };
  return useFetch(url, options);
}

export async function destroyPost(postID) {
  let url = `/api/posts/${postID}`;
  let options = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  };
  return useFetch(url, options);
}

export async function updatePost(data, postID) {
  let url = `/api/posts/${postID}`;
  let options = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ post: data }),
  };
  return useFetch(url, options);
}

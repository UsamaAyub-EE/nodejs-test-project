export default async function useFetch(url, options) {
  const response = await fetch(url, options);
  return await response.json();
};


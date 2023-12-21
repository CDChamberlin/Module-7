import { useEffect, useReducer } from "react";

import axios from "axios";

export default function PostListReducer() {
  const [postsResult, dispatch] = useReducer(reducer, {
    loading: true,
    posts: [],
    error: "",
  });
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=5") // modify this URL to test the error case
      .then((response) => {
        // object passed to dispatch holds all data needed for updating state: both type of update and associated data
        dispatch({ type: "FETCH_SUCCESS", payload: response.data }); // dispatch calls reducer function and triggers re-render
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR", payload: error.message }); // lets us handle different types of state changes differently
      });
  }, []);
  return (
    <div className="PostList componentBox">
      {postsResult.loading ? (
        <div>Loading posts...</div>
      ) : (
        postsResult.posts.map((post) => (
          <div className="post" key={post.id}>
            <h3>
              Post #{post.id}: {post.title}
            </h3>
            <p>{post.body}</p>
          </div>
        ))
      )}
      <div className="error">{postsResult.error}</div>
    </div>
  );
}

function reducer(postsResult, action) {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { loading: false, posts: action.payload, error: "" };
    case "FETCH_ERROR":
      return { loading: false, posts: [], error: action.payload };
    default:
      return { ...postsResult, loading: false };
  }
}

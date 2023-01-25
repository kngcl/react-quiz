/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';

export default function App() {
  const [posts, setPosts] = useState([]);
  const fetchPost = async () => {
    const response = await fetch(
      ' https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'
    );
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div className="App">
      <p> {posts.category} </p>
      <button onClick={fetchPost}> get new joke </button>
    </div>
  );
}

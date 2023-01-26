/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css';

// eslint-disable-next-line react/prop-types
export default function Quiz({ path, PageNum }) {
  const [posts, setPosts] = useState([]);
  const fetchPost = async () => {
    const response = await fetch(
      ' https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'
    );
    const data = await response.json();
    setPosts([...data.results]);
  };
  useEffect(() => {
    fetchPost();
  }, []);

  return (
    posts.length > 0 && (
      <div className="App">
        <h1>Question {PageNum}</h1>
        <h2>Category:{posts[PageNum].category}</h2>
        <p> {posts[PageNum].question}</p>
        <input type="radio" />
        <p>{posts[PageNum].incorrect_answers}</p>
        <input type="radio" />
        <p>{posts[PageNum].correct_answers}</p>
        <Link to={path}>
          <button type="submit">Next</button>
        </Link>
      </div>
    )
  );
}

/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css';

// eslint-disable-next-line react/prop-types
export default function Quiz({ path, PageNum }) {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);
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

  const handleClick = (e) => {
    if (e.target.value === posts[PageNum].correct_answer) {
      setCount(count + 1);
      console.log(`${count}`);
    } else {
      console.log('in correct answer');
    }
  };

  return (
    posts.length > 0 && (
      <div className="App toll">
        <div className="toll">
          <p>point:{count}</p>
          <h1>Question {PageNum}</h1>
          <h2>Category:{posts[PageNum].category}</h2>
          <p> {posts[PageNum].question.replace(/([^\w ]|_)/g, '')}</p>
          <div>
            <div className="next_radio">
              <button
                type="button"
                className="next"
                value={posts[PageNum].incorrect_answers}
                onClick={handleClick}
              >
                <b>{posts[PageNum].incorrect_answers}</b>
              </button>
            </div>
            <br />
            <div className="next_radio">
              <button
                type="button"
                className="next"
                value={posts[PageNum].correct_answer}
                onClick={handleClick}
              >
                <b>{posts[PageNum].correct_answer}</b>
              </button>
            </div>
          </div>
        </div>
        <Link to={path}>
          <button type="submit" className="Nest_Button">
            Next
          </button>
        </Link>
      </div>
    )
  );
}

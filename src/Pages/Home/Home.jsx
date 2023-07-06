import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="container">
      <div className="quizContent">
        <h1>Hi there! 👋 Lets get started for your quiz...</h1>
        <p>
          Interact is the easiest tool for creating quizzes that generate leads
          and sell products. To get started, answer a few short questions so we
          can help build the perfect quiz for your business.
        </p>
        <Link to="/quiz/1">
          <button type="submit" className="tell">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

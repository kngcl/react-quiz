import React, { useContext } from 'react';
import QuizContext from '../../Context/Context';
import './Result.css';

export default function Result() {
  const score = useContext(QuizContext);
  return (
    <div>
      <div className="result">
        <h1 className="result_score">
          {' '}
          <p>Result </p>
          <p className="emoji"> &#128512;</p>
        </h1>
        <p>
          <i className="score">{score.count}/10</i>
        </p>
      </div>
    </div>
  );
}

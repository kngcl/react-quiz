/* eslint-disable prefer-destructuring */
import { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import QuizContext from '../../Context/Context';
import './Quiz.css';

export default function Quiz() {
  const { posts, count, setCount } = useContext(QuizContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const page = +id;

  useEffect(() => {
    if (!posts[page]) {
      navigate('/');
    }
  }, []);
  const handleClick = (e) => {
    const value = e.target.value;
    if (value === posts[page].correct_answer) {
      setCount(count + 1);
      console.log(`${count}`);
    } else {
      console.log(value);
    }
  };

  return (
    posts.length > 0 && (
      <div className="App toll">
        <div className="toll">
          <p>point:{count}</p>
          <h1>Question {page}</h1>
          <h2>Category:{posts[page].category}</h2>
          <p> {posts[page].question.replace(/([^\w ]|_)/g, '')}</p>
          <div className="boolean">
            <div className="next_radio">
              <button
                type="button"
                className="next"
                value="True"
                onClick={(e) => handleClick(e, 'value')}
              >
                <b>True</b>
              </button>
            </div>
            <br />
            <div className="next_radio">
              <button
                type="button"
                className="next"
                value="False"
                onClick={(e) => handleClick(e, 'value')}
              >
                <b>False</b>
              </button>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="Nest_Button"
          onClick={() => navigate(page >= 10 ? '/Result' : `/quiz/${page + 1}`)}
        >
          Next
        </button>
      </div>
    )
  );
}

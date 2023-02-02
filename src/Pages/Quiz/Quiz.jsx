/* eslint-disable prefer-destructuring */
import { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import QuizContext from '../../Context/Context';
import './Quiz.css';

export default function Quiz() {
  const { posts, count, setCount } = useContext(QuizContext);
  /*   const [disable, setDisable] = useState(false); */
  const navigate = useNavigate();
  const { id } = useParams();
  const page = +id;

  const handleClick = (e) => {
    const val = e.target.value;
    if (val === posts[page].correct_answer) {
      setCount(count + 1);
    }
  };

  useEffect(() => {
    if (!posts[page]) {
      navigate('/');
    }
  }, []);

  return (
    posts.length > 0 && (
      <div className="App toll">
        <div className="toll">
          <p>point:{count}</p>
          <h1>Question {page}</h1>
          <h2>Category:{posts[page].category}</h2>
          <p> {posts[page].question.replace(/([^\w ]|_)/g, '')}</p>
          <div className="boolean">
            <div className="next_rad">
              <button
                className="Question__btn1"
                value="True"
                onClick={(e) => {
                  handleClick(e, 'val');
                }}
                type="button"
              >
                True
              </button>
              <button
                className="Question__btn2"
                type="button"
                value="False"
                onClick={(e) => handleClick(e, 'val')}
              >
                False
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

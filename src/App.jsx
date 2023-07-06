/* eslint-disable react/jsx-no-constructed-context-values */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import QuizContext from './Context/Context';
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';

function App() {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);
  const fetchPost = async () => {
    const response = await fetch(
      ' https://opentdb.com/api.php?amount=11&difficulty=hard&type=boolean'
    );
    const data = await response.json();
    setPosts([...data.results]);
  };
  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <QuizContext.Provider value={{ posts, count, setCount }}>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route path="/Result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </QuizContext.Provider>
  );
}

export default App;

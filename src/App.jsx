import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz PageNum={0} path="/quiz1" />} />
        <Route path="/quiz1" element={<Quiz PageNum={1} path="/quiz2" />} />
        <Route path="/quiz2" element={<Quiz PageNum={2} path="/quiz3" />} />
        <Route path="/quiz3" element={<Quiz PageNum={3} path="/quiz4" />} />
        <Route path="/quiz4" element={<Quiz PageNum={4} path="/quiz5" />} />
        <Route path="/quiz5" element={<Quiz PageNum={5} path="/quiz6" />} />
        <Route path="/quiz6" element={<Quiz PageNum={6} path="/quiz7" />} />
        <Route path="/quiz7" element={<Quiz PageNum={7} path="/quiz8" />} />
        <Route path="/quiz8" element={<Quiz PageNum={8} path="/quiz9" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

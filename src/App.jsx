import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz PageNum={1} path="/quiz1" />} />
        <Route path="/quiz1" element={<Quiz PageNum={2} path="/quiz2" />} />
        <Route path="/quiz2" element={<Quiz PageNum={3} path="/quiz3" />} />
        <Route path="/quiz3" element={<Quiz PageNum={4} path="/quiz4" />} />
        <Route path="/quiz4" element={<Quiz PageNum={5} path="/quiz5" />} />
        <Route path="/quiz5" element={<Quiz PageNum={6} path="/quiz6" />} />
        <Route path="/quiz6" element={<Quiz PageNum={7} path="/quiz7" />} />
        <Route path="/quiz7" element={<Quiz PageNum={8} path="/quiz8" />} />
        <Route path="/quiz8" element={<Quiz PageNum={9} path="/quiz9" />} />
        <Route path="/quiz9" element={<Quiz PageNum={10} path="/quiz10" />} />
        <Route path="/quiz10" element={<Quiz PageNum={11} path="/quiz11" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

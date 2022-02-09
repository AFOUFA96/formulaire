
import './App.css';
import react from 'react';
import { BrowserRouter as Router, Switch, Route, Routes, Link } from "react-router-dom";
import HomePage from './pages/HomePage';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

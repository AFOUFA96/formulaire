
import './App.css';
import react from 'react';
import { BrowserRouter as Router, Switch, Route, Routes, Link } from "react-router-dom";
import BaseScreen from './pages/BaseScreen';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AccountPage from './pages/AccountPage';
import AccountNewPass from './pages/AccountNewPass';
import AccountValidation from './pages/AccountValidation';
import RegisterPage from './pages/RegisterPage';
import NotFoundScreen from './pages/NotFoundScreen';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<BaseScreen />}> 
            <Route path="/home" index element={<HomePage />}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/register" element={<RegisterPage />}/>
            {/* <Route path="/admin" element={}/>
            <Route path="/user" element={}/> */}
            <Route path="/account" element={<AccountPage /> }/>
            <Route path="/account/validation" element={<AccountValidation /> }/>
            <Route path="/account/newpass" element={<AccountNewPass /> }/>
          </Route>
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

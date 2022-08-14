
import './App.css';
// import react from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import BaseScreen from './pages/BaseScreen';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AccountPage from './pages/AccountPage';
import AccountNewPass from './pages/AccountNewPass';
import AccountValidation from './pages/AccountValidation';
import RegisterPage from './pages/RegisterPage';
import NotFoundScreen from './pages/NotFoundScreen';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';
import LogoutPage from './pages/LogoutPage';


function App() {
  const { auth } = useContext(AuthContext);
  console.log(auth.role);
  console.log(auth.email);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<BaseScreen />}> 
            <Route path="/" index element={<HomePage />}/>
            {auth.role === 0 && <Route path="login" element={<LoginPage />} />}
            {auth.role === 0 && <Route path="register" element={<RegisterPage />} />}
            {auth.role === 2 && <Route path="/admin" element={<AdminPage />}/>}
            {auth.role === 1 && <Route path="/user" element={<UserPage />}/>}
            {auth.role > 0 && <Route path="account" element={<AccountPage />} />}
            <Route path="/account/validation" element={<AccountValidation /> }/>
            <Route path="/account/newpass" element={<AccountNewPass /> }/>
            {auth.role > 0 && <Route path="logout" element={<LogoutPage />} />}
          </Route>
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

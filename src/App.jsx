import './App.css'
import { useState } from 'react';
import Router from './routes/Router';

function App() {

  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
    loggedIn: false
  });

  return (
    <>
      <Router loginForm={loginForm} setLoginForm={setLoginForm} />
    </>
  )
}

export default App

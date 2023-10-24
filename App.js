import React, { useState } from 'react'
import './App.css';
import Login  from "./pages/Login";
import Register  from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  const [currentForm, setCurrentForm] = useState('login');
  
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> :
        <Dashboard onFormSwitch={toggleForm} /> 
      }
    </div>
  );
}

export default App;

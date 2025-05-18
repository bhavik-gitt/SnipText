import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Alert from './Components/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#2c2c2c';
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'SnipText - DarkMode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = 'SnipText - LightMode';
    }
  };

  return (
    <>
      <Router>
        <Navbar title="SnipText" About="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}  />
            <Route exact path="/" element={<TextForm heading="SnipText - Word Counter, Character Counter, Remove extra Spaces" showAlert={showAlert} mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

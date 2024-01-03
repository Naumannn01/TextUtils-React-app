import { useState } from 'react';

import './App.css';
import About from './components/About.js';
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm.js'
import Alert from './components/Alert.js';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState("null");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert(": Dark mode has been activated", "danger");
      document.title = "TextUtils- Dark Mode";
      // setInterval(()=>{
      //   document.title="TextUtils is Amazing";
      // },2000);
      // setInterval(()=>{
      //   document.title="Download Now";
      // },1500);
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(": Light mode has been activated", "success");
      document.title = "TextUtils- Light Mode";

    }
  }
  return (
    <>
      <Navbar title="Nauman" aboutText="About new" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <About />
        <TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode} toggleMode={toggleMode} />
        </div>
        
        {/*<BrowserRouter>
         <Navbar title="Nauman" aboutText="About new" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container">
          <Routes>
            <Route exact path='/about' element={<About />} />
            <Route exact path='/' element={<TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode} toggleMode={toggleMode} />}>

            </Route>

          </Routes>
        </div>
      </BrowserRouter> */}
      </>
      );
}

      export default App;
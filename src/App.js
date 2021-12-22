import React, { useState } from 'react'
import "./App.css";
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from "./components/Navbar";
import Textforms from "./components/Textforms";

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const toggleMode = () => {
    if (mode==='light') {
      setMode('dark')
      document.body.style.backgroundColor = '#121416';
      document.body.style.color = '#fff';
      showAlert('Dark Mode has been Enabled', 'success');
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = '#000';
      showAlert('Light Mode has been Enabled', 'success');
    }
  }

  return (
    <>
      <Navbar navBrand="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Textforms showAlert={showAlert} heading="Enter the text to Analyze" mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
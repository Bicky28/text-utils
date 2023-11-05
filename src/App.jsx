import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import {
//         BrowserRouter as Router,
//         Route, Routes
//       } from 'react-router-dom'

// import About from './components/About'
function App() {
  //dark mode is enable or not enable
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {

    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500)

  }

  const toggleMode = () => {

    if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
        showAlert('dark mode has been enable', 'success')
    }

    else {
        setMode('light')
        document.body.style.backgroundColor = 'white';
        showAlert('light mode has been enable', 'success')
    }

  }


  return (
      <>
        <Navbar 
          title='textUtils' 
          about="About Us" 
          mode={mode} 
          toggleMode={toggleMode}  
        />
        <Alert alert={alert} />
      <div className="container my-3">
        <TextForm 
          showAlert={showAlert} 
          mode={mode} 
          heading="Enter The Text To Analyze"
        />
      </div>
  </>

      )
}

export default App;

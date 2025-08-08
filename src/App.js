import './App.css';
import React, { useState } from 'react';
import Navbar from './components/navbar';
import About from './components/About';
import Alert from './components/Alert';
import TextFrom from './components/TextFrom';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
  }from "react-router-dom"

function App() {
  const[alert, setalert]= useState(null)
  const showalert = (message, type)=>{
     setalert({
      msg: message,
      type: type
    }) 
    setTimeout(()=>{
      setalert(null)

    }, 2000)
  }

   return (
    <>
    <Router>
    <Navbar title= "Textutils"/>
    <Alert alert={alert}></Alert>
   <Routes>
    <Route path="/about"
    element={<About/>}/>
    <Route path="/"
    element={<TextFrom showalert={showalert}></TextFrom>}/>
   </Routes>
    </Router>
    </>
  );

}
export default App;
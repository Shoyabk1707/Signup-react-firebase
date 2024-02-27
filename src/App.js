import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { auth } from "./firebase";
import HomePage from "./components/HomePage/HomePage";

function App() {

  const [userName,  setUserName] = useState("");

  useEffect(()=>{
    auth.onAuthStateChanged((user) => {
      if(user){
        setUserName(user.displayName);
      }else setUserName("");
      // console.log(user);
    });
  },[])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route  path="/login" element={<Login />} />
          <Route  path="/signup" element={<Signup />} />
          <Route  path="/home" element={<HomePage />} />
          <Route  path="/" element={<Home name={userName}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

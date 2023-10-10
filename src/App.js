import React from 'react';
import './App.css';
import Login from './Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main12 from './main1';
import Profile from './profile';
import Register from './register';

function App() {
  return (
    
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="login" element={<Login/>}/> 
        <Route path="register" element={<Register/>}/> 
        <Route path="main" element={<Main12/>}/> 
        <Route path="profile" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
   
  );

}

export default App;
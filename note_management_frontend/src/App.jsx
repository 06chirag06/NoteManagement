import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Style/App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import NotesHome from './Pages/NotesHome';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/userId/home" element={<NotesHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

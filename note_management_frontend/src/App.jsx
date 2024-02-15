import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Style/App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import NotesHome from './Pages/NotesHome';
// import InsertNote from './Pages/InsertNote';
import UserProfile from './Pages/UserProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/userid/home" element={<NotesHome />} />
        <Route path='/userid/newnote' element={<NotesHome />}/>
        <Route path='/userid/labels' element={<NotesHome />}/>
        <Route path='/userid/archive' element={<NotesHome />}/>
        <Route path='/userid/trash' element={<NotesHome />}/>
        <Route path='/userId/profile' element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

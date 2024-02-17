import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./Style/App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import NotesHome from "./Pages/NotesHome";
// import InsertNote from './Pages/InsertNote';
import UserProfile from "./Pages/UserProfile";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  // const url = window.location.pathname;
  // const navigate = useNavigate();
  // Redirect to home page if user is not logged in and trying to access any other page other than login
  // useEffect(() => {
  //   console.log(url);
  //   if(!sessionStorage.getItem('token') && url.includes("userid")){
  //     console.log(url);
  //     // history.replaceState('/');
  //     window.location.href='/';
  //   }
  // }, [url]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} caseSensitive />
        <Route path="/signup" element={<Signup />} caseSensitive />
        <Route element={<PrivateRoutes />}>
          <Route path="/userid/home" element={<NotesHome />} caseSensitive />
          <Route path="/userid/newnote" element={<NotesHome />} caseSensitive />
          <Route path="/userid/labels" element={<NotesHome />} caseSensitive />
          <Route path="/userid/archive" element={<NotesHome />} caseSensitive />
          <Route path="/userid/trash" element={<NotesHome />} caseSensitive />
          <Route
            path="/userid/profile"
            element={<UserProfile />}
            caseSensitive
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

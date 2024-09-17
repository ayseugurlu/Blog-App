import React from "react";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";
import Login from "../pages/Login";
import MyBlogs from "../pages/MyBlogs";
import About from "../pages/About";
import PrivateRouter from "./PrivateRouter";
import Home from "../pages/Home";
import NewPost from "../components/NewPost";


const AppRouter = () => {
  return (
    <BrowserRouter>
    <Dashboard/>
      <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        {/* <Route path="myblogs" element={<PrivateRouter />}> */}
          <Route path="myblogs" element={<MyBlogs />} />
          <Route path="newpost" element={<NewPost />} />
        {/* </Route> */}

        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

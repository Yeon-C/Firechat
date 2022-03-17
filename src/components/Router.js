import React, { useState } from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Auth from "../components/Routes/Auth";
import Home from "../components/Routes/Home";
import Profile from "../components/Routes/Profile";
import Navigation from "./Navigation";

const AppRouter = ({ refreshUser, isLoggedIn, userObj }) => {
  return (
    <Router>
      {isLoggedIn && <Navigation userObj={userObj} />}
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Home userObj = {userObj}/>} />
            <Route path="/profile" element={<Profile userObj = {userObj} refreshUser={refreshUser} />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Auth />} />
          </>
        )}
      </Routes>
    </Router>
  );
};
export default AppRouter;

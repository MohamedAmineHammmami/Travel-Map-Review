import React, { useState } from "react";
import "./topbar.css";

function TopBar({ loginToggle, registerToggle, user, setUser }) {
  const logOut = () => {
    localStorage.clear();
    setUser(null);
  };
  return (
    <div className="topBar">
      {localStorage.getItem("token") ? (
        <button className="logout" onClick={() => logOut()}>
          Log out
        </button>
      ) : (
        <>
          <button
            className="login"
            onClick={() => {
              loginToggle(true);
              registerToggle(false);
            }}
          >
            Log in
          </button>
          <button
            className="register"
            onClick={() => {
              loginToggle(false);
              registerToggle(true);
            }}
          >
            Register
          </button>
        </>
      )}
    </div>
  );
}

export default TopBar;

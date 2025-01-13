import React from "react";
import "./topbar.css";

function TopBar({ loginToggle, registerToggle }) {
  return (
    <div className="topBar">
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
      <button className="logout">Log out</button>
    </div>
  );
}

export default TopBar;

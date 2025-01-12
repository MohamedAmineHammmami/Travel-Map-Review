import React from "react";
import "./topbar.css";

function TopBar() {
  return (
    <div className="topBar">
      <button className="login">Log in</button>
      <button className="register">Register</button>
      <button className="logout">Log out</button>
    </div>
  );
}

export default TopBar;

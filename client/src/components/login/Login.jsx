import React, { useState } from "react";
import "./login.css";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";

function Login({ loginToggle, loginState, handleOnChange }) {
  return (
    <div className={loginState ? "loginPopUp" : "loginPopUpHide"}>
      <CancelPresentationIcon
        className="cancelIcon"
        fontSize={"large"}
        onClick={() => loginToggle(!loginState)}
      />
      <div className="logo">
        <AddLocationAltIcon style={{ color: "teal", fontSize: "2.6rem" }} />
        <h1>MapTravel</h1>
      </div>
      <form className="loginForm">
        <label>username:</label>
        <input type="text" placeholder="username" />
        <label>password:</label>
        <input type="password" placeholder="password" />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;

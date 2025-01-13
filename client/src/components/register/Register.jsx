import React from "react";
import "./register.css";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";

function Register({ registerState, registerToggle, handleOnChange }) {
  return (
    <div className={registerState ? "registerPopUp" : "registerPopUpHide"}>
      <CancelPresentationIcon
        className="cancelIcon"
        fontSize={"large"}
        onClick={() => registerToggle(!registerState)}
      />
      <div className="logo">
        <AddLocationAltIcon style={{ color: "teal", fontSize: "2.6rem" }} />
        <h1>MapTravel</h1>
      </div>
      <form className="registerForm">
        <label>username:</label>
        <input
          type="text"
          placeholder="username"
          name="username"
          onChange={(e) => handleOnChange(e)}
        />
        <label>email:</label>
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={(e) => handleOnChange(e)}
        />
        <label>password:</label>
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={(e) => handleOnChange(e)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;

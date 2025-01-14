import React, { useState } from "react";
import "./register.css";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";

function Register({ registerState, registerToggle }) {
  const [registerInputs, setRegisterInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  return (
    <div className={registerState ? "registerPopUp" : "registerPopUpHide"}>
      <CancelPresentationIcon
        className="cancelIcon"
        fontSize={"large"}
        onClick={() => {
          registerToggle(false);
        }}
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
          onChange={(e) =>
            setRegisterInputs({
              ...registerInputs,
              [e.target.name]: e.target.value,
            })
          }
        />
        <label>email:</label>
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={(e) =>
            setRegisterInputs({
              ...registerInputs,
              [e.target.name]: e.target.value,
            })
          }
        />
        <label>password:</label>
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={(e) =>
            setRegisterInputs({
              ...registerInputs,
              [e.target.name]: e.target.value,
            })
          }
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;

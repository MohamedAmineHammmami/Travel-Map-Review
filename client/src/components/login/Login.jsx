import React, { useState } from "react";
import "./login.css";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import axios from "axios";

function Login({ loginToggle, loginState, setUser }) {
  const [loginInputs, setLoginInputs] = useState({ username: "", email: "" });

  const login = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        loginInputs
      );
      console.log(res.data);
      const token = res.headers["authorization"]?.split(" ")[1];
      if (token) {
        localStorage.setItem("token", token);
        loginToggle(false);
        setUser(res.data.user);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={loginState ? "loginPopUp" : "loginPopUpHide"}>
      <CancelPresentationIcon
        className="cancelIcon"
        fontSize={"large"}
        onClick={() => loginToggle(false)}
      />
      <div className="logo">
        <AddLocationAltIcon style={{ color: "teal", fontSize: "2.6rem" }} />
        <h1>MapTravel</h1>
      </div>
      <form
        className="loginForm"
        onSubmit={(e) => {
          e.preventDefault();
          login();
        }}
      >
        <label>username:</label>
        <input
          type="text"
          placeholder="username"
          name="username"
          onChange={(e) =>
            setLoginInputs({
              ...loginInputs,
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
            setLoginInputs({
              ...loginInputs,
              [e.target.name]: e.target.value,
            })
          }
        />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;

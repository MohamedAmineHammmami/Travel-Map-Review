import React, { useState } from "react";
import "./register.css";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import axios from "axios";

function Register({ registerState, registerToggle }) {
  const [registerInputs, setRegisterInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  console.log(registerInputs);

  const register = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        registerInputs
      );
      console.log(res.data.msg);
    } catch (err) {
      console.log(err);
    }
  };
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
      <form
        className="registerForm"
        onSubmit={(e) => {
          e.preventDefault();
          register();
        }}
      >
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

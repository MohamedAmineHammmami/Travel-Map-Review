import React, { useEffect, useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "./app.css";
import PopUp from "./components/popUp/PopUp.jsx";
import LocationMarker from "./components/locationMarke/LocationMarker.jsx";
import L from "leaflet";
import passport2 from "./assets/passport2.png";
import TopBar from "./components/topBar/TopBar.jsx";
import Login from "./components/login/Login.jsx";
import Register from "./components/register/Register.jsx";

// Custom icon creation
const customIcon = L.icon({
  iconUrl: passport2, // Replace with your icon URL
  iconSize: [32, 32], // Size of the icon [width, height]
  iconAnchor: [16, 32], // Anchor point of the icon [x, y]
  popupAnchor: [0, -32], // Popup anchor point [x, y]
});

const initialInputs = { username: "", email: "", password: "" };

function App() {
  const [pins, setPins] = useState([]);
  const [user, setUser] = useState({});
  const [loginInputs, setLoginInputs] = useState({ ...initialInputs });
  const [registerInputs, setRegisterInputs] = useState({ ...initialInputs });
  const [loginToggle, setLoginToggle] = useState(false);
  const [registerToggle, setRegisterToggle] = useState(false);

  console.log("registerInputs", registerInputs);
  console.log("loginInputs", loginInputs);

  const getPins = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/pin/all");
      setPins(res.data.pins);
    } catch (err) {
      console.log(err);
    }
  };

  const login = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login");
      setUser(res.data.user);
    } catch (err) {
      console.log(err);
    }
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    const inputs = {
      username: "",
      email: "",
      password: "",
      [e.target.name]: e.target.value,
    };

    const { email } = inputs;
    if (email) {
      setRegisterInputs(inputs);
    } else {
      setLoginInputs(inputs);
    }
  };

  useEffect(() => {
    getPins();
  }, []);
  return (
    <>
      <TopBar loginToggle={setLoginToggle} registerToggle={setRegisterToggle} />
      <Login
        loginToggle={setLoginToggle}
        loginState={loginToggle}
        handleOnChange={handleOnChange}
      />
      <Register
        registerToggle={setRegisterToggle}
        registerState={registerToggle}
        handleOnChange={handleOnChange}
      />
      <MapContainer
        center={[36.8065, 10.1815]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100vh", zIndex: 0 }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {pins.map((el, i) => {
          return (
            <Marker position={[el.lat, el.long]} key={i} icon={customIcon}>
              <PopUp infos={el} />
            </Marker>
          );
        })}
        <LocationMarker />
      </MapContainer>
    </>
  );
}

export default App;

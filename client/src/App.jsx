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

function App() {
  const [pins, setPins] = useState([]);
  const [loginToggle, setLoginToggle] = useState(false);
  const [registerToggle, setRegisterToggle] = useState(false);
  const [user, setUser] = useState(null);

  const getPins = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/pin/all");
      setPins(res.data.pins);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPins();
  }, []);
  return (
    <>
      <TopBar
        loginToggle={setLoginToggle}
        registerToggle={setRegisterToggle}
        user={user}
        setUser={setUser}
      />
      <Login
        loginToggle={setLoginToggle}
        loginState={loginToggle}
        setUser={setUser}
      />
      <Register
        registerToggle={setRegisterToggle}
        registerState={registerToggle}
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
        {user && <LocationMarker username={user?.username} />}
      </MapContainer>
    </>
  );
}

export default App;

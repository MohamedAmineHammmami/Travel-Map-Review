import React, { useEffect, useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "./app.css";
import PopUp from "./components/popUp/PopUp.jsx";
import LocationMarker from "./components/locationMarke/LocationMarker.jsx";
import L from "leaflet";

import passport2 from "./assets/passport2.png";

function App() {
  const [pins, setPins] = useState([]);
  // Custom icon creation
  const customIcon = L.icon({
    iconUrl: passport2, // Replace with your icon URL
    iconSize: [32, 32], // Size of the icon [width, height]
    iconAnchor: [16, 32], // Anchor point of the icon [x, y]
    popupAnchor: [0, -32], // Popup anchor point [x, y]
  });

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
    <MapContainer
      center={[36.8065, 10.1815]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "100vh" }}
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
  );
}

export default App;

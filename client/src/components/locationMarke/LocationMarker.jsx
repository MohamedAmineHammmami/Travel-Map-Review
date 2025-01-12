import React, { useState } from "react";
import { useMapEvents, Marker } from "react-leaflet";
import L from "leaflet";
import "./locationMarker.css";
import passportIcon from "../../assets/passportIcon.png";
import FormPopUp from "../formPopUp/FormPopUp";

function LocationMarker() {
  const [markers, setMarkers] = useState([]);
  const [locationInfo, setLocationInfo] = useState(null);
  console.log(locationInfo?.lat, locationInfo?.lon);

  // Custom icon creation
  const customIcon = L.icon({
    iconUrl: passportIcon, // Replace with your icon URL
    iconSize: [32, 32], // Size of the icon [width, height]
    iconAnchor: [16, 32], // Anchor point of the icon [x, y]
    popupAnchor: [0, -32], // Popup anchor point [x, y]
  });

  const fetchLocationInfo = async (lat, lng) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`
      );
      const data = await response.json();
      setLocationInfo(data);
    } catch (error) {
      console.error("Error fetching location info:", error);
    }
  };

  useMapEvents({
    click(e) {
      console.log(e);
      fetchLocationInfo(e.latlng.lat, e.latlng.lng);
      setMarkers((currentMarkers) => [
        ...currentMarkers,
        { lat: e.latlng.lat, lng: e.latlng.lng },
      ]);
    },
  });

  return (
    <>
      {markers.map((el, i) => (
        <Marker key={i} position={[el.lat, el.lng]} icon={customIcon}>
          <FormPopUp
            place={locationInfo?.display_name}
            lat={locationInfo?.lat}
            long={locationInfo?.lon}
          />
        </Marker>
      ))}
    </>
  );
}

export default LocationMarker;

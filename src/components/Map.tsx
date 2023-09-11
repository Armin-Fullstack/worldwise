import { useNavigate, useSearchParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from "react-leaflet";
import styles from "./Map.module.css";
import { useEffect, useState } from "react";
import { useCities } from "../contexts/CitiesProvider";
export default function Map(): JSX.Element {
  const [searchParams] = useSearchParams();
  const [mapPosition, setMapPosition] = useState([40, 30]);
  const { cities } = useCities();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  useEffect(() => {
    if(lat && lng) setMapPosition([lat , lng])
  } , [lat , lng])
  return (
    <div className={styles.mapContainer}>
      <MapContainer
        className={styles.map}
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker position={[city.position.lat , city.position.lng]} key={city.id}>
            <Popup>
              <span>{city.emoji}</span> <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
      <ChangeCenter position={mapPosition}/>
      <DetectClick />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({position}) {
  const map = useMap()
  map.setView(position)
  return null
}

function DetectClick() {
const navigate = useNavigate()
useMapEvents({
  click: e => {
    navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`)
  }
  })
}
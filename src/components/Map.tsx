import { useSearchParams } from "react-router-dom"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import styles from "./Map.module.css"
import { useState } from "react"
export default function Map(): JSX.Element {
  const [searchParams , setSearchParams] = useSearchParams()
  const [mapPosition , setMapPosition] = useState([40 , 30])
  const lat = searchParams.get("lat")
  const lng = searchParams.get("lng")

  return(
    <div className={styles.mapContainer}>
      <MapContainer className={styles.map} center={mapPosition} zoom={13} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
    />
    <Marker position={mapPosition}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
    </div>
  )
}
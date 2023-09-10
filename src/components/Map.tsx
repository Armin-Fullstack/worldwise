import { useNavigate, useSearchParams } from "react-router-dom"
import styles from "./Map.module.css"
export default function Map(): JSX.Element {
  const [searchParams , setSearchParams] = useSearchParams()
  const lat = searchParams.get("lat")
  const lng = searchParams.get("lng")

  const navigate = useNavigate()
  return(
    <div className={styles.mapContainer} onClick={() => {navigate("form")}}>
      

      <p>position: lat: {lat} , lng: {lng}</p>
    </div>
  )
}
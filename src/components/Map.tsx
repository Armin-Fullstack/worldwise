import { useSearchParams } from "react-router-dom"
import styles from "./Map.module.css"
export default function Map(): JSX.Element {
  const [searchParams , setSearchParams] = useSearchParams()
  const lat = searchParams.get("lat")
  const lng = searchParams.get("lng")
  return(
    <div className={styles.mapContainer}>
      Map

      <p>position: lat: {lat} , lng: {lng}</p>
    </div>
  )
}
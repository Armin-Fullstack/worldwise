import SideBar from "../components/SideBar";
import Map from "../components/Map";
import styles from "./AppLayout.module.css";

export default function AppLayout(): JSX.Element {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
    </div>
  );
}


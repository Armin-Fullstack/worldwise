import styles from "./Logo.module.css";
import { Link } from "react-router-dom";
export default function Logo(): JSX.Element {
  return (
    <Link to="/">
      <img src="/logo.png" alt="WorldWise logo" className={styles.logo} />
    </Link>
  );
}

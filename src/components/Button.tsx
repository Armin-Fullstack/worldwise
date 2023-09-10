
import styles from "./Button.module.css"

export default function Button({children , type , onClick}):JSX.Element {
  return(
    <button className={`${styles.btn} ${styles[type]}`} onClick={onClick}>{children}</button>
  )
} 
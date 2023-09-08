import styles from "./Footer.module.css"
export default function Footer(): JSX.Element {
  return(
    <footer className={styles.footer}>
        <p className={styles.copyright}>&copy; Copyright {new Date().getFullYear()} by Worldwise Inc.</p>
      </footer>
  )
}
import AppNav from "./AppNav"
import Footer from "./Footer"
import Logo from "./Logo"
import styles from "./Sidebar.module.css"
export default function SideBar(): JSX.Element {
  return(
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <p>List of cities</p>
      <Footer />
    </div>
  )
}
import { Link } from "react-router-dom"
import style from "./PageNav.module.css"
export default function PageNav(): JSX.Element {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
      </ul>
    </nav>
  )
}
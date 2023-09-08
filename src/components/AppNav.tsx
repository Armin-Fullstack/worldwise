import style from "./AppNav.module.css";
import { NavLink } from "react-router-dom";
export default function AppNav(): JSX.Element {
  return(
    <nav className={style.nav}>
      <ul>
        <li>
         <NavLink to="cities">Cities</NavLink>
        </li>
        <li>
         <NavLink to="countries">Countries</NavLink>
        </li>
      </ul>
    </nav>
  )
}
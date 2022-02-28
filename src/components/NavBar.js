import { NavLink } from "react-router-dom";
import iconHome from "../assets/home.png";


const NavBar = () => {
  return (
    <div className="nav-bar">
    <nav>
      <NavLink to="/">
      <img src={iconHome} alt="home" className="icon-home"/>
      </NavLink>
    </nav>
    </div>
  );
}

export default NavBar;
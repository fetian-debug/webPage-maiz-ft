import logo from "../../assets/images/logo.svg";
import tree from "../../assets/images/tree.svg";
import Style from "./navbar.module.css";
import { Link } from "react-router-dom";

export default function navbar() {
  return (
    <>
    
      <nav className={Style.nav}>
        <a href="index.html">
          <img className="logo" src={logo} alt="logo" />
        </a>
        <div className={Style.nav_links}>
        <li data-aos="fade-right"><Link to="/about">About</Link></li>
        <li data-aos="fade-right"><Link to="#">Menu</Link></li>
        <li data-aos="fade-right"><Link to="#">Venue</Link></li>
        <li data-aos="fade-right"><Link to="#">Venue</Link></li>
        </div>
        <div className={Style.nav_bt}>
          <button className={Style.booking}>Book Now</button>
          <img src={tree}alt="logo tree" />
        </div>
      </nav>
    </>
  );
}

import logo from "../../assets/images/logo.svg";
import tree from "../../assets/images/tree.svg";
import Style from "./navbar.module.css";

export default function navbar() {
  return (
    <>
    
      <nav className={Style.nav}>
        <a href="index.html">
          <img className="logo" src={logo} alt="logo" />
        </a>
        <div className={Style.nav_links}>
          <a href="about.html">About</a>
          <a href="menu.html">Menu</a>
          <a href="#">Venue</a>
          <a href="#">Events</a>
        </div>
        <div className={Style.nav_bt}>
          <button>Book Now</button>
          <img src={tree}alt="logo tree" />
        </div>
      </nav>
    </>
  );
}

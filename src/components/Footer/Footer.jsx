import Style from "./footer.module.css";
import logo2 from "../../assets/images/logo2.png";

export default function Footer() {
  return (
    <>
      <footer>
        <div className={Style.footer_box1}>
          <a href="index.html">
            <img src={logo2} alt="logo" />
          </a>
          <div className={Style.footer_links}>
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="menu.html">Menu</a>
            <a href="#">Venue</a>
            <a href="#">Events</a>
            <a href="#">Contact us</a>
          </div>
        </div>
        <hr />
        <div className={Style.footer_box2}>
          <p>© 2024 | All rights reserved.</p>
          <div className={Style.social_links}>
          <i className="fa fa-facebook"></i>         
          <i className="fa fa-twitter"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-linkedin"></i>    
        </div>
        </div>
      </footer>
    </>
  );
}

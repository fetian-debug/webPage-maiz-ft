import logo from "../../assets/images/logo.svg";
import tree from "../../assets/images/tree.svg";



export default function navbar() {
  return (
    <>

      {/* <nav className={`navbar navbar-expand-lg bg-body-tertiary p-0`}>
        <div className="container-fluid p-0 ">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" className={`   ${Style.logo}`} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent ">
            
            <ul className={`navbar-nav m-auto mb-2 mb-lg-0 ${Style.pages}`}>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Venue
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Events
                </a>
              </li>
            </ul>
            <button type="button" className={`btn  `}>
              Book Now
            </button>
            <img src={tree} alt="tree" />
          </div>
        </div>
      </nav> */}
    
        
        <nav className="site-nav grid">

          <div id="logo">          
            <a href="#home"><img src={logo} alt="logo" /></a>
          </div>

          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#menue">Menu</a></li>
            <li><a href="#venue">Venue</a></li>
            <li><a href="#contact">Contactus</a></li>

          </ul>

        <div id="booking">
        <button className="button">Book Now</button>
        <img src={tree} alt="tree" />


        </div>

        </nav>
    
    
    </>
  );
}

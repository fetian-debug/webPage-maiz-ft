import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="xl:px-28 px-8 sm:px-12 bg-primary py-2">
      <nav className="flex justify-between container pt-8 max-w-[1800px] m-auto relative items-start">
        {/* Decoration bg */}
        <img
          src="./back.png"
          alt="Decoration"
          className="absolute -top-4 -left-4 z-0"
        />

        {/* Logo */}
        <Link to="/Maiz/" className="hover:cursor-pointer z-10">
          <img src="./logo.png" alt="Logo" className="z-50" />
        </Link>

        {/* Navigation */}
        <ul className="hidden lg:flex gap-[85px] text-Ps">
          <li className="hover:text-secondary transition-all duration-300 ">
            <Link to="/Maiz/About">About</Link>
          </li>
          <li className="hover:text-secondary transition-all duration-300">
            <a href="#menu">Menu</a>
          </li>
          <li className="hover:text-secondary transition-all duration-300">
            <a href="#venue">Venue</a>
          </li>
          <li className="hover:text-secondary transition-all duration-300">
            <Link to="/Maiz/Events">Events</Link>
          </li>
        </ul>

        {/* Burger Icon for Mobile */}
        <button className="lg:hidden z-10" onClick={toggleSidebar}>
          <RxHamburgerMenu className="text-secondary text-4xl" />
        </button>

        {/* Booking */}
        <div className="relative hidden z-0 lg:inline-block">
          <Link to="/Maiz/Booking">
            {" "}
            <button className="bg-secondary text-primary p-7 py-3 relative text-bText">
              Book Now{" "}
            </button>
          </Link>
          <img
            src="./btn-dec.png"
            alt="Button Decoration"
            className="absolute -top-[7px] -right-9 z-10 h-[73px]"
          />
        </div>

        {/* Sidebar for Mobile */}
        <div
          className={`fixed top-0 left-0 w-64 h-full bg-primary z-20 transition-transform duration-300 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button className="absolute top-4 right-4" onClick={toggleSidebar}>
            <MdOutlineClose className="text-secondary text-4xl" />
          </button>
          <ul className="flex flex-col mt-16 gap-8 text-Ps px-8">
            <li className="hover:text-secondary transition-all duration-300">
              <Link to="/Maiz/About" onClick={toggleSidebar}>
                About
              </Link>
            </li>
            <li className="hover:text-secondary transition-all duration-300">
              <a href="#menu" onClick={toggleSidebar}>
                Menu
              </a>
            </li>
            <li className="hover:text-secondary transition-all duration-300">
              <a href="#venue" onClick={toggleSidebar}>
                Venue
              </a>
            </li>
            <li className="hover:text-secondary transition-all duration-300">
              <Link to="/Maiz/Events" onClick={toggleSidebar}>
                Events
              </Link>
            </li>
            <li className="hover:text-secondary transition-all duration-300">
              <Link to="/Maiz/Booking" onClick={toggleSidebar}>
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

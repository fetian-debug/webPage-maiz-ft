import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="xl:px-28 px-8 sm:px-12 bg-secondary py-4 text-darkC border-b-[0.2px] border-darkC/30">
      <div className="flex container max-w-[1800px] m-auto items-center justify-center py-12 flex-col gap-10">
        {/* Logo */}
        <img src="./logo2.png" alt="Logo" className="w-32 md:w-40" />

        {/* Navigation */}
        <ul className="flex flex-wrap gap-8 md:gap-[85px] text-primary text-[16px] md:text-[18px] justify-center">
          <li className="hover:text-darkC transition-all duration-300">
            <Link to="/Maiz/">Home</Link>
          </li>
          <li className="hover:text-darkC transition-all duration-300">
            <Link to="/Maiz/About">About</Link>
          </li>
          <li className="hover:text-darkC transition-all duration-300">
            <a href="#menu">Menu</a>
          </li>
          <li className="hover:text-darkC transition-all duration-300">
            <a href="#venue">Venue</a>
          </li>
          <li className="hover:text-darkC transition-all duration-300">
            <Link to="/Maiz/Events">Events</Link>
          </li>
          <li className="hover:text-darkC transition-all duration-300">
            <Link to="/Maiz/Contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

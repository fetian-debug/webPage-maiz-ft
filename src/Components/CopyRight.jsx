import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const CopyRight = () => {
  return (
    <div className="xl:px-28 px-8 sm:px-12 bg-secondary py-4 text-darkC">
      <div className="container max-w-[1800px] m-auto flex flex-wrap items-center justify-center gap-5">
        <div className="text md:col-span-1">
          <p className="text-[16px] md:text-[18px] text-center md:text-left min-w-[400px]">
            &copy; 2021 | All rights reserved.
          </p>
        </div>

        <div className="socials flex gap-10">
          <a href="https://www.facebook.com/">
            <FaFacebook className="hover:scale-125 transition-all duration-300" />
          </a>
          <a href="https://www.twitter.com/">
            <FaTwitter className="hover:scale-125 transition-all duration-300" />
          </a>
          <a href="https://www.instagram.com/">
            <BsInstagram className="hover:scale-125 transition-all duration-300" />
          </a>
          <a href="https://www.linkedin.com/">
            <FaLinkedin className="hover:scale-125 transition-all duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CopyRight;

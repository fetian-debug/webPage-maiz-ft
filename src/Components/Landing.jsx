import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="xl:px-28 px-8 sm:px-12 bg-primary py-2">
      <div className="flex flex-col container md:pb-12 pb-8 lg:pb-32 max-w-[1800px] m-auto relative z-10 mt-2 gap-10 items-start">
        {/* Image */}
        <img
          src="./landing.png"
          alt="Landing"
          className=" absolute z-0 right-0 hidden 2xl:block"
        />
        {/* Image Decoration */}
        <img
          src="./landing-dec.png"
          alt="Decoration"
          className="absolute -top-[28px] -right-[25px] z-0 hidden 2xl:block"
        />

        {/* Rounded Circles */}
        <img
          src="./circles.png"
          alt="Circles"
          className="absolute -left-2 -bottom-20 hidden 2xl:block"
        />

        {/* Text */}
        <div className="title bg-primary/70 text-Ps text-[50px] sm:text-[65px] lg:text-mainT z-10 lg:min-w-[950px] 2xl:min-w-[1300px] mt-8 leading-[60px] sm:leading-[80px] lg:leading-[120px]">
          <h1>
            Taste the authentic
            <br /> Saudi cuisine
          </h1>
        </div>

        <p className="text-Ps text-[18px] sm:text-[23px] font-light">
          Among the best Saudi chefs in the world,
          <br /> serving you something beyond flavor.
        </p>

        <Link to="/Maiz/Menu">
          <button className="text-secondary border-[3px] border-secondary px-7 py-4 relative text-bText">
            Our Menu
          </button>
        </Link>

        {/* Image for Small devices */}
        <div className="relative flex 2xl:hidden lg:justify-end lg:w-full">
          <img src="./landing.png" alt="Landing"/>
          <img src="./landing-dec.png" alt="Dec" className=" absolute -top-7 -right-6"/>
        </div>
      </div>
    </div>
  );
};

export default Landing;

import { Link } from "react-router-dom";

const Venue = () => {
  return (
    <div className="xl:px-28 px-8 sm:px-12 bg-primary py-2" id="venue">
      <div className="flex flex-col lg:flex-row container md:pb-24 pb-16 max-w-[1800px] m-auto relative z-10 pt-32 gap-10 items-center lg:items-start">
        {/* BackGround decoration */}
        <img
          src="./back.png"
          alt="Decoration"
          className="absolute -top-4 -right-4 z-0"
        />

        {/* Image */}

        <div className="ven-img lg:w-1/3">
          <img src="./venue.png" alt="Venue" />
        </div>
        <div className="text flex flex-col lg:w-2/3 justify-between items-center md:items-start min-h-[622px] gap-10 lg:gap-0 text-center md:text-start">
          <h1 className="text-[40px] md:text-STitle text-Ps leading-[40px] md:leading-[70px] lg:leading-[80px]">
            A distinctive dining destination
            <br /> inspired by the culture.
          </h1>
          <p className="text-Ps text-[18px] md:text-[23px] font-light">
            Experience Al Balad old town of Jeddah vibes.
          </p>
          <div className="btn border-[3px] border-secondary relative w-[171px] h-[65px]">
            <Link>
              <button className="text-primary bg-secondary px-8 py-3 text-bText absolute -top-2 -right-2">
                Our Venue
              </button>
            </Link>
          </div>

          <div className="ven-imgs grid gap-10 grid-cols-1 md:grid-cols-3">
            <img src="./l1.png" alt="Location 1" />
            <img src="./l2.png" alt="Location 2" />
            <img src="./l3.png" alt="Location 3" />
          </div>

          <span className="block w-[300px] md:w-[468px] h-[3px] bg-secondary"></span>
        </div>
      </div>
    </div>
  );
};

export default Venue;

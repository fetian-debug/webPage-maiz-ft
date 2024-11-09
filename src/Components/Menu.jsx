import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div
      className="2xl:px-96 px-8 sm:px-12 bg-[url('/menu-bg.png')] py-2 min-h-[869px] bg-cover relative"
      id="menu"
    >
      {/* Decoration */}

      <img
        src="./menu-dec.png"
        alt="Triangles"
        className=" absolute bottom-0 right-0 hidden md:block"
      />

      <div className="max-w-[1800px] m-auto flex flex-col items-center justify-center min-h-[869px] text-Ps text-center sm:px-12 lg:px-10 gap-10">
        <div className="img">
          <img src="./menu-star.png" alt="Star" />
        </div>
        <div className="text">
          <h1 className="text-[40px] md:text-[50px] lg:text-STitle leading-[50px] lg:leading-[87px]">
            A unique menu that reflects the true essence of the Saudi cuisine
          </h1>
        </div>

        <div className="btn border-[3px] border-secondary relative w-[171px] h-[65px]">
          <Link>
            <button className="text-primary bg-secondary px-8 py-3 text-bText absolute -top-2 -right-2">
              Our Menu
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;

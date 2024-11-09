const About = () => {
  return (
    <div className="xl:px-28 px-8 bg-primary py-2 min-h-[calc(100vh-31.9rem)] flex items-center justify-center">
      <div className="flex flex-col lg:flex-row-reverse container md:pb-24 pb-16 max-w-[1800px] m-auto relative z-10 pt-12 gap-10 items-center lg:items-start text-center">
        <div className="img w-full lg:w-1/2">
          <img src="./about.jpg" alt="About" />
        </div>

        <div className="text text-Ps flex flex-col gap-10 w-full lg:w-1/2 justify-around min-h-[500px]">
          <p className="text-5xl text-secondary">WELCOME TO MAIZ RESTAURANT</p>
          <p className="text-2xl">
            MAIZ is unique fine dining concept that brings authentic Saudi
            cuisine in a thematic Saudi Arabian cultural setting, that is part
            of Saudi Arabia’s economic diversification plan, located in Ad
            Diriyah. Ad Diriyah is a cultural landmark, it was the home of the
            Saudi Royal family and served as the capital of the Emirate of
            Diriyah.
          </p>

          <p className="text-2xl">
            MAIZ is set up in an idyllic setting far away from the hustle and
            bustle of the busy city life, MAIZ is offering authentic Saudi food
            to locals and tourists and brings the best cuisines from around the
            regions that make up the modern Kingdom of Saudi Arabia. MAIZ is the
            world’s first such authentic Saudi restaurant that brings out the
            best of the Saudi culture, heritage and cuisine.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

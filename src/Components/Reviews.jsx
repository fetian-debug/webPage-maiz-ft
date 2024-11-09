const Reviews = () => {
  return (
    <div className="xl:px-28 px-8 sm:px-12 bg-primary py-2">
      <div className="flex flex-col md:flex-row container md:pb-24 pb-16 lg:pb-32 max-w-[1800px] m-auto relative z-10 pt-16 items-center justify-center">
        <div className="text min-h-[555px] bg-secondary text-darkC w-full lg:w-[35%] relative px-16 sm:px-24 py-16">
          {/* Decoration */}
          <img
            src="./rev-dec.png"
            alt="Decoration"
            className="bottom-5 absolute left-0"
          />

          <div className="review flex flex-col h-[100%] min-h-[428px] justify-between">
            <div className="text relative">
              <span className="quote-mark absolute text-5xl -top-4 -left-7">
                “
              </span>
              <p className="text-T21">
                You {"can't"} go wrong with Chicken Mandi, I had it twice. The
                chicken was cooked perfectly, juicy & soft (usually mandi
                chicken is a bit dry). I would defiantly recommend it.
              </p>
            </div>

            <div className="user flex items-center justify-between border-b-[0.83px] border-[#00646D] pb-5 relative">
              <div className="text flex flex-col">
                <h1 className="text-[14px]">Khalid Al Dawsry</h1>
                <span className="text-[12px]">Jeddah, Saudi</span>
              </div>
              <div className="img">
                <img src="./user.png" alt="User" />
              </div>

              <span className="w-[41px] h-[3px] bg-darkC absolute bottom-0 right-0"></span>
            </div>
          </div>
        </div>
        <div className="vid min-h-[556px] w-full lg:w-[65%] bg-[url('/food.png')] bg-cover flex justify-center items-center">
          <img src="./play.png" alt="Play" />
        </div>
      </div>
    </div>
  );
};

export default Reviews;

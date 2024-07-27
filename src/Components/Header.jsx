const Header = () => {
  return (
    <>
      <div className="bg-[#1B3252] w-full h-16">
        <h1 className="text-white font-semibold text-2xl p-4 font-sans ">
          Wellness Retreats
        </h1>
      </div>

      <div className="banner bg-[#E0D9CF] mt-4 mx-4 h-96  ">
        <div className="px-4 pt-3 ">
          <img
            src="https://cdn.midjourney.com/873b60f7-f026-40f9-b2d7-184e981ee1f5/0_3.jpeg"
            alt=""
            className="w-full h-72 rounded-lg object-cover   border-2"
          />

          <div className="my-3">
            <h1 className="font-sans font-normal text-xl ">
              Discover Your Inner Peace
            </h1>
            <p className="text-sm tracking-wide ">
              Join us for a series of wellness retreats designed to help you
              find tranquility and rejuvination
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

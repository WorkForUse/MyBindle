const Footer = () => {
  return (
    <footer>
      <div className="footerBn">

        <div className="text-left">
          <h1 className="text-6xl mb-3">
            Join the Fun – Download <br /> MyBindle Now!
          </h1>
          <p className="mb-3">
            Your Social Network, Your Way <br />
            Download MyBindle Now and Be a Part <br />
            of a Community That’s Always Evolving!
          </p>

          <div className="gap-5 mt-8 mb-2 flex">
            {/* App Store Button */}
            <button
              style={{ borderRadius: '30px' }}
              className="bg-white pt-2 pb-2 pl-6 pr-6 font-bold flex items-center"
            >
              <img
                src="https://pixsector.com/cache/56f2646e/avd5cee2ff5ea9da4d328.png"
                width={70}
                alt="App Store Logo"
              />
              <div className="text-left text-black ml-2">
                <p className="text-[10px] leading-none">DOWNLOAD ON THE</p>
                <h2 className="text-2xl font-bold leading-none">App Store</h2>
              </div>
            </button>

            {/* Google Play Button */}
            <button
              style={{ borderRadius: '30px' }}
              className="bg-white pt-2 pb-2 pl-6 pr-6 font-bold flex items-center"
            >
              <img
                src="https://img.icons8.com/fluent/512/google-play.png"
                width={50}
                alt="Google Play Logo"
              />
              <div className="text-left text-black ml-2">
                <p className="text-[10px] leading-none">GET IT ON</p>
                <h2 className="text-2xl font-bold leading-none">Google Play</h2>
              </div>
            </button>
          </div>
        </div>

        <div className="abs-1">
          <img src="../src/ImgS/FooterIMG-1.png" alt="Footer Design 1" />
        </div>

        <div className="abs-2">
          <img src="../src/ImgS/FooterIMG-2.png" alt="Footer Design 2" />
        </div>

      </div>
    </footer>
  );
};

export default Footer;
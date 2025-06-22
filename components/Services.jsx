
const Services = () => {
  return (
    <>
      <div className="SprConn">
        <div>
          <img src="../src/ImgS/mobileImageSecond.png" alt="" />
        </div>

        <div className="text-start">

          <h1 className="text-5xl font-bold mb-5 text-black">Where Every Click Sparks a Connection!</h1>
          <p className="mb-5">A small act of kindness today can create a lifetime of impact for someone in need. Give from the heart and change a life!</p>

          <div className="p-5 shadow-md rounded-lg">
            <h4 className="text-black">🎥 Short Videos & Reels</h4>
            <p className="mt-2">Share engaging, bite-sized content that keeps everyone entertained.</p>
          </div>

          <div className="p-5 shadow-md rounded-lg mt-5">
            <h4 className="text-black">🔔 Smart Notifications</h4>
            <p className="mt-2">Stay updated on what matters without the noise.</p>
          </div>

          <div className="p-5 shadow-md rounded-lg mt-5">
            <h4 className="text-black">👥 Interest-Based Communities</h4>
            <p className="mt-2">Join groups and discussions that match your passion.</p>
          </div>

        </div>

      </div>

      <div className="hwAPP text-center">

        <div className="text-black">
          <h1 className="text-5xl font-bold">How to Install Our App</h1>
          <p className="mt-4">Getting started is quick and easy! Follow these simple steps to install and start using MyBindle today.</p>
        </div>

        <div className="stepWise">
          <h4 className="text-3xl">01</h4>
          <div className="lineStep"></div>
          <h4 className="text-3xl text-black">02</h4>
          <div className="lineStep"></div>
          <h4 className="text-3xl text-black">03</h4>
        </div>

        {/* /////// */}
        <div class="grid grid-cols-3 gap-4 rounded-lg ml-10 mr-10 mt-3 mb-3">
          <div class="text-black shadow-lg p-5">
            <h3 className="font-bold mb-5">Download</h3>
            <p className="">Open Play Store or App Store</p>
          </div>

          <div class="text-black shadow-lg rounded-lg ml-8 mr-8 mt-3 mb-3">
            <h3 className="font-bold mb-6">Install App </h3>
            <p className="mb-3">The app will install automatically.</p>
          </div>

          <div class="text-black shadow-lg rounded-lg ml-8 mr-8 mt-3 mb-3">
            <h3 className="font-bold mb-6">Ready to Use</h3>
            <p className="mb-3">Sign up or log in to start exploring!</p>
          </div>

        </div>
        {/* /////// */}
        {/* ////////// */}
        <div className="dnBn rounded-lg">
          
          <div class="text-left">
            <h1 className="text-6xl mb-3">Be the Reason <br /> Someone Smiles Today!</h1>
            <p className="mb-3">Your generosity can change lives every donation brings hope, support, and a brighter <br /> future. Give today and make a difference!</p>
            <button className="pt-2 pb-2 pl-6 pr-6 bg-white font-bold">Donate Now</button>
          </div>

            <div className="abs-1">
            <img src="../src/ImgS/MobileImage3.png" alt="" />
            </div>

            <div className="abs-2">
            <img src="../src/ImgS/MobileImageFourth.png" alt="" />
            </div>

        </div>

          
        {/* ////////// */}

      </div>
    </>
  )
}

export default Services
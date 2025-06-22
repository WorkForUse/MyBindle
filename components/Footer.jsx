const Footer = () => {
  return (
    <>
      <footer>
        <div className="footerBn">

          <div class="text-left">
            <h1 className="text-6xl mb-3">Join the Fun – Download <br /> MyBindle Now!</h1>
            <p className="mb-3">Your Social Network, Your Way <br /> Download MyBindle Now and Be a Part <br /> of a Community That’s Always Evolving!</p>

            <div className="gap-5 mt-8 mb-2 flex">
            <button style={{borderRadius:'30px'}} className="bg-white pt-2 pb-2 pl-6 pr-6 bg-white font-bold flex items-center">
              <img src="https://pixsector.com/cache/56f2646e/avd5cee2ff5ea9da4d328.png" width={70} alt="" />
              <h5 className="font-light text-black" style={{fontSize:'10px'}}>DOWNLOAD ON THE <br /> <h2 className="text-2xl font-bold">App Store</h2> </h5>
            </button>

            <button style={{borderRadius:'30px'}} className="bg-white pt-2 pb-2 pl-6 pr-6 bg-white font-bold flex items-center">
              <img src="https://img.icons8.com/fluent/512/google-play.png" width={50} alt="" />
              <h5 className="font-light text-black text-left" style={{fontSize:'10px'}}>GET IT ON <br /> <h2 className="text-2xl font-bold">Google Play</h2> </h5>
            </button>
            </div>
            
          </div>

          <div className="abs-1">
            <img src="../assets/FooterIMG-1.png" alt="" />
          </div>

          <div className="abs-2">
            <img src="../assets/FooterIMG-2.png" alt="" />
          </div>

        </div>
      </footer>
    </>
  )
}

export default Footer
import homePageContent from '../src/data/HomePageData';
// imported logo and images
import Logo from '../src/assets/images/logo.png';
import MobileOne from '../src/assets/images/mobileOne.png';
import MobileImageSecond from '../src/assets/images/mobileImageSecond.png';

const HomePage = () => {
  const { banner, featuresTitle, featuresSubtitle, features, publicity } = homePageContent;

  return (
    <>
      <div className='hmPg'>
        <div className="logoCenter">
          <h5 className='text-2xl font-bold'>
            <img width={50} src={Logo} alt="Logo" /> My Bindle
          </h5>

          <div className="flex BannerOne">
            <div style={{ width: '50%' }} className='p-12'>
              <h1 className='text-5xl text-white font-bold mb-5' style={{ lineHeight: '55px' }}>
                {banner.heading.split('\n').map((line, idx) => (
                  <span key={idx}>{line}<br /></span>
                ))}
              </h1>
              <p className='text-white font-semi-bold' style={{ lineHeight: '25px' }}>{banner.description}</p>
              <button type="button" className="bg-white mt-3 pt-3 pb-3 pl-8 pr-8 rounded-lg font-bold">{banner.button}</button>
            </div>

            <div style={{ width: '50%' }} className='relative sc-Column'>
              <img src={MobileOne} className='w-80 absolute' style={{ top: '0%', left: '30%' }} alt="Mobile Phone" />
              {banner.features.map((feat, idx) => (
                <div key={idx} className={`smConnection-dsExplore absolute flex bg-white text-black p-3 ${idx === 0 ? 'tp-left' : 'bm-left'}`}>
                  <img src={feat.icon} width={30} alt="Feature Icon" />
                  <h3>{feat.text}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="Home">
        <div className="topText">
          <h2 className="text-4xl font-bold">{featuresTitle}</h2>
          <h5 className="font-medium">{featuresSubtitle}</h5>
        </div>

        <div className="SIx_boxes grid grid-cols-3 gap-4">
          {features.map((feature, idx) => (
            <div key={idx} className="p-8 shadow-xl rounded-lg">
              <h5 className="text-2xl mb-3">{feature.icon} {feature.title}</h5>
              <p className={feature.text.length > 70 ? "text-sm" : ""}>{feature.text}</p>
            </div>
          ))}
        </div>

        {/* Publicity Section */}
        <div className="SprConn">
          <div>
            <img src={MobileImageSecond} alt="Mobile Image" />
          </div>
          <div className="text-start">
            <h1 className="text-4xl font-bold mb-5">{publicity.heading}</h1>
            <p className="mb-5">{publicity.description}</p>
            {publicity.cards.map((card, idx) => (
              <div key={idx} className={`p-5 shadow-md rounded-lg ${idx > 0 ? 'mt-5' : ''}`}>
                <h4>{card.title}</h4>
                <p className="mt-2">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
import { useState } from "react";
import { FaStar } from "react-icons/fa";

// Importing images properly
import Avatar1 from '../src/assets/images/Avatar1.png';
import Avatar2 from '../src/assets/images/Avatar2.png';
import Avatar3 from '../src/assets/images/Avatar3.png';
import Avatar4 from '../src/assets/images/Avatar4.png';
import Avatar5 from '../src/assets/images/Avatar5.png';
import Avatar6 from '../src/assets/images/Avatar6.png';
import Avatar7 from '../src/assets/images/Avatar-7.png';
import Avatar8 from '../src/assets/images/Avatar-8.png';

const AboutPage = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleTestimonials = () => {
    setShowMore(!showMore);
  };

  const mainTestimonials = [
    { name: "Emily R", country: "USA", avatar: Avatar1 },
    { name: "Amit K", country: "India", avatar: Avatar2 },
    { name: "Sophie M", country: "Brazil", avatar: Avatar5 },
    { name: "Javier L", country: "Spain", avatar: Avatar4 },
    { name: "Lucas T", country: "Brazil", avatar: Avatar3 },
    { name: "Nora S", country: "Canada", avatar: Avatar6 },
  ];

  const extraTestimonials = [
    {
      name: "Patrick",
      profession: "Product Designer at COVEO",
      avatar: Avatar7,
      text:
        "This platform brings people closer in the best way possible! From reconnecting with old friends to making new ones, every moment is valuable.",
    },
    {
      name: "Olena S",
      profession: "Artist at Sergienko",
      avatar: Avatar8,
      text:
        "A social network that actually listens to its users! The design is sleek, the features are powerful, and the experience is seamless.",
    },
  ];

  return (
    <div className="Testimonial">
      <h1 className="text-center text-5xl font-bold mb-8">What Our Users Say</h1>

      {/* First 6 Testimonials */}
      <div className="grid grid-cols-3 gap-4">
        {mainTestimonials.map((user, i) => (
          <div className="fdb shadow-lg" key={i}>
            <div className="flex icons mb-2">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
            </div>
            <p>
              This platform changed the way I stay in touch with my friends and
              family. The interface is smooth, and I love how easy it is to
              share my moments!
            </p>
            <div className="flex mt-4 gap-4 items-center">
              <img
                src={user.avatar}
                alt={`${user.name}'s avatar`}
                style={{ borderRadius: "30px", width: "50px", height: "50px" }}
              />
              <div>
                <div>{user.name}</div>
                <div className="text-gray-600">{user.country}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Extra Testimonials */}
      <div
        className={`grid grid-cols-3 gap-4 mt-6 transition-all duration-500 relative ${showMore ? "h-auto" : "h-[220px] overflow-hidden"
          }`}
      >
        {/* Left Extra */}
        <div className="fdb shadow-lg">
          <p>{extraTestimonials[0].text}</p>
          <div className="flex mt-4 gap-4 items-center">
            <img
              src={extraTestimonials[0].avatar}
              alt="Extra Avatar 1"
              style={{ borderRadius: "30px", width: "50px", height: "50px" }}
            />
            <div>
              <div>{extraTestimonials[0].name}</div>
              <div className="text-gray-600">{extraTestimonials[0].profession}</div>
            </div>
          </div>
        </div>

        {/* Center Button */}
        <div className="flex justify-center items-center z-10 mt-14">
          <button
            className="bg-white shadow-lg font-bold pt-4 pb-4 pl-12 pr-12 rounded-lg"
            style={{ color: "#ff5349" }}
            onClick={toggleTestimonials}
          >
            {showMore ? "See Less" : "See More"}
          </button>
        </div>

        {/* Right Extra */}
        <div className="fdb shadow-lg">
          <p>{extraTestimonials[1].text}</p>
          <div className="flex mt-12 gap-4 items-center">
            <img
              src={extraTestimonials[1].avatar}
              alt="Extra Avatar 2"
              style={{ borderRadius: "30px", width: "50px", height: "50px" }}
            />
            <div>
              <div>{extraTestimonials[1].name}</div>
              <div className="text-gray-600">{extraTestimonials[1].profession}</div>
            </div>
          </div>
        </div>

        {!showMore && (
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
        )}
      </div>
    </div>
  );
};

export default AboutPage;
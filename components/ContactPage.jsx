import { FaEnvelope, FaCommentDots } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-6 contactDiv">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side: Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
          <h2 className="text-4xl font-bold text-black mb-8">Let’s Connect</h2>
          <form className="space-y-6 text-black">
            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3.5 text-[#ff5349]" />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#ff5349] outline-none transition"
                required
              />
            </div>

            {/* First & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#ff5349] outline-none"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#ff5349] outline-none"
                required
              />
            </div>

            {/* Message */}
            <div className="relative">
              <FaCommentDots className="absolute left-3 top-4 text-[#ff5349]" />
              <textarea
                placeholder="Your Message..."
                rows="4"
                className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#ff5349] outline-none"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#ff5349] hover:bg-[#e14a3f] text-white font-semibold px-10 py-3 rounded-full transition duration-300 shadow-md"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Right Side: Image or Map */}
        <div className="rounded-2xl overflow-hidden shadow-xl mapLocation">
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13271.38447140879!2d73.0551!3d33.6844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf84b66bd4d1%3A0x65a7e1b6aa78a34e!2sIslamabad!5e0!3m2!1sen!2s!4v1687124214384!5m2!1sen!2s"
            className="w-full h-[500px] border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
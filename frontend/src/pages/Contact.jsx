import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";


const Contact = () => {
  return (
    <section className="p-2 pt-24 md:px-10 md:py-5 bg-gray-100">
     
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
        CON
        <span className="bg-gradient-to-r from-[#d81d1d] to-[#d1b34f] bg-clip-text text-transparent">
          TACT
        </span>
      </h1>
      <div className="w-40 h-1.5 bg-[#d81d1d] mx-auto rounded-xl mb-10"></div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
     
        <form className="space-y-5">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-xl bg-white shadow-lg placeholder:text-slate-500 focus:outline-0 text-gray-800"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl bg-white shadow-lg placeholder:text-slate-500 focus:outline-0 text-gray-800"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone"
              className="w-full px-4 py-3 rounded-xl bg-white shadow-lg placeholder:text-slate-500 focus:outline-0 text-gray-800"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Your Message</label>
            <textarea
              rows="5"
              placeholder="Type your message..."
              className="w-full px-4 py-3 rounded-2xl bg-white shadow-lg placeholder:text-slate-500 focus:outline-0 text-gray-800 resize-none"
            ></textarea>

          </div>

          <button
            type="submit"
            className="px-8 py-3 w-full bg-gradient-to-r cursor-pointer from-[#d81d1d] to-[#d1b34f] text-white font-semibold rounded-xl hover:opacity-90 transition"
          >
            SUBMIT
          </button>
        </form>

        <div className="space-y-6">
          <div className="flex items-center gap-4 p-5 rounded-2xl bg-white shadow-lg hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#d81d1d] to-[#d1b34f]">
              <FaEnvelope size={20} className="text-white" />
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase text-gray-700">Yahoo</h4>
              <p className="text-sm text-gray-600">kasturi_sridevi@yahoo.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5 rounded-2xl bg-white shadow-lg hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#d81d1d] to-[#d1b34f]">
              <FaMapMarkerAlt size={20} className="text-white" />
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase text-gray-700">Location</h4>
              <p className="text-sm text-gray-600">
                Plot No-37, C.R.R Puram L&T Colony Manapakkam, Chennai, TN 600116
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5 rounded-2xl bg-white shadow-lg hover:-translate-y-2 transition-all duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-[#d81d1d] to-[#d1b34f]">
              <FaPhoneAlt size={20} className="text-white" />
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase text-gray-700">Phone</h4>
              <p className="text-sm text-gray-600">+91 9962554922</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

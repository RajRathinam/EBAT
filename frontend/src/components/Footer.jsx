import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700 py-6 px-4">
      <div className="max-w-7xl  mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
      
        <div className="flex flex-col justify-between">
          <img src="/logo_1.png" alt="Company Logo" className="w-15 h-auto" />
          <h2 className="text-2xl hidden md:flex font-bold text-gray-900">Drone Services</h2>
          <p className="text-sm hidden md:flex leading-relaxed text-gray-600">
            Providing top-notch drone solutions for industries, events, and
            innovations with cutting-edge technology.
          </p>
        </div>

        <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 relative">
              Quick Links
              <span className="absolute left-0 bottom-[-6px] w-12 h-[2px] bg-red-500"></span>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-red-500 hover:text-red-700 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-red-500 hover:text-red-700 transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-red-500 hover:text-red-700 transition"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-red-500 hover:text-red-700 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 relative">
              Services
              <span className="absolute left-0 bottom-[-6px] w-12 h-[2px] bg-red-500"></span>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/agriculture"
                  className="text-red-500 hover:text-red-700"
                >
                  Agricultural Drones
                </Link>
              </li>
              <li>
                <Link
                  to="/services/cinematography"
                  className="text-red-500 hover:text-red-700"
                >
                 Cinematography
                </Link>
              </li>
              <li>
                <Link
                  to="/services/delivery"
                  className="text-red-500 hover:text-red-700"
                >
                  Delivery Drones
                </Link>
              </li>
              <li>
                <Link
                  to="/services/surveillance"
                  className="text-red-500 hover:text-red-700"
                >
                  Surveying Drones
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4 relative">
            Contact
            <span className="absolute left-0 bottom-[-6px] w-12 h-[2px] bg-red-500"></span>
          </h3>
          <p className="text-gray-600">Email: support@ebat.in</p>
          <p className="text-gray-600">Phone: +91 9962554922</p>

          <div className="flex space-x-4 mt-4">
            <a
              href="mailto:support@ebat.in"
              className="p-2 rounded-full bg-gray-200 text-gray-700 hover:bg-red-500 hover:text-white transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="mailto:support@ebat.in"
              className="p-2 rounded-full bg-gray-200 text-gray-700 hover:bg-red-500 hover:text-white transition"
            >
              <FaTwitter />
            </a>
            <a
              href="mailto:support@ebat.in"
              className="p-2 rounded-full bg-gray-200 text-gray-700 hover:bg-red-500 hover:text-white transition"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:support@ebat.in"
              className="p-2 rounded-full bg-gray-200 text-gray-700 hover:bg-red-500 hover:text-white transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Ebat. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

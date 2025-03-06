import React from "react";
import { FaFacebook, FaTwitter, FaYoutube, FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 rounded-xl mt-12">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div>
          <h2 className="text-3xl font-bold text-white">🎮 Chill Gamer</h2>
          <p className="mt-2 text-gray-400">
            Your go-to place for game reviews, ratings, and discussions.
          </p>
        </div>

      
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <a href="/" className="hover:text-yellow-400">Home</a>
          <a href="/reviews" className="hover:text-yellow-400">Reviews</a>
          <a href="/about" className="hover:text-yellow-400">About Us</a>
          <a href="/contact" className="hover:text-yellow-400">Contact</a>
        </div>

     
        <div>
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-blue-500 text-2xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-400 hover:text-sky-400 text-2xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-red-500 text-2xl">
              <FaYoutube />
            </a>
            <a href="#" className="text-gray-400 hover:text-indigo-500 text-2xl">
              <FaDiscord />
            </a>
          </div>
        </div>
      </div>

     
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500">
        © {new Date().getFullYear()} Chill Gamer. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

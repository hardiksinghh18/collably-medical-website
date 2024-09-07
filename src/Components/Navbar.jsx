import React, { useState, useEffect } from 'react';
import aiProtocol from '../Images/aiProtocol.png'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        // User is scrolling down, hide the navbar
        setShowNavbar(false);
      } else {
        // User is scrolling up, show the navbar
        setShowNavbar(true);
      }
      setLastScrollTop(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-lg px-10 py-2 transition-transform duration-300 ${
          showNavbar ? 'translate-y-0' : '-translate-y-16'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <a href="/" className='flex items-center justify-center gap-4'>
              <img
                src={aiProtocol}
                alt="Logo"
                className="h-10 w-10"
              />
            <span className="hidden md:flex text-white font-bold text-lg hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#7AFF75] to-[#2A89F4] transition-all duration-300 ease-in-out">AI Protocol</span>
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-center space-x-2 lg:space-x-8 text-xs md:text-md">
            <a
              href="/"
              className="text-white hover:text-black px-2 lg:px-6 py-1 font-semibold bg-transparent rounded-full hover:bg-gradient-to-r from-[#7AFF75] to-[#2A89F4] transition-all duration-300 ease-in-out"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-white hover:text-black px-2 lg:px-6 py-1 font-semibold bg-transparent rounded-full hover:bg-gradient-to-r from-[#7AFF75] to-[#2A89F4] transition-all duration-300 ease-in-out"
            >
              About
            </a>
            <a
              href="/services"
              className="text-white hover:text-black px-2 lg:px-6 py-1 font-semibold bg-transparent rounded-full hover:bg-gradient-to-r from-[#7AFF75] to-[#2A89F4] transition-all duration-300 ease-in-out"
            >
              Services
            </a>
            <a
              href="/contact"
              className="text-white hover:text-black px-2 lg:px-6 py-1 font-semibold bg-transparent rounded-full hover:bg-gradient-to-r from-[#7AFF75] to-[#2A89F4] transition-all duration-300 ease-in-out"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

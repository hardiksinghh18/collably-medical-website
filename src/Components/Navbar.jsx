import React, { useState, useEffect } from 'react';

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
    <div
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50  bg-transparent backdrop-blur-lg px-10 py-2 my-1   text-xs rounded-full shadow-lg border border-[#2A89F4] transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-16'
      }`}
    >
      <div className="flex justify-center space-x-2 lg:space-x-8">
        <a href='/' className="text-white hover:text-black lg:px-6 py-2 font-bold bg-transparent  rounded-full hover:bg-gradient-to-r from-[#7AFF75] to-[#2A89F4] transition-all duration-300 ease-in-out">
          Home
        </a>
        <a href='/' className="text-white hover:text-black lg:px-6 py-2 font-bold bg-transparent  rounded-full hover:bg-gradient-to-r from-[#7AFF75] to-[#2A89F4] transition-all duration-300 ease-in-out">
          About
        </a>
        <a href='/' className="text-white hover:text-black ;g:px-6 py-2 font-bold bg-transparent rounded-full hover:bg-gradient-to-r from-[#7AFF75] to-[#2A89F4] transition-all duration-300 ease-in-out">
          Services
        </a>
        <a href='/' className="text-white hover:text-black lg:px-6 py-2 font-bold bg-transparent rounded-full hover:bg-gradient-to-r from-[#7AFF75] to-[#2A89F4] transition-all duration-300 ease-in-out">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;


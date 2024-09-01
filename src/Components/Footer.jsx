import React from 'react';
import { FaFacebook, FaTwitter, FaTelegramPlane } from "react-icons/fa";
import logo from '../Images/LOGO.png';

const Footer = () => {
    return (
        <footer className="bg-[#171717] text-gray-400 font-semibold py-12 px-4 lg:px-24">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">

                {/* Navigation Links */}
                <div className="flex flex-col md:flex-row justify-between w-full md:w-auto md:space-x-16 text-center md:text-left">
                    {/* Left Section */}
                    <div className="relative mb-8 md:mb-0">
                        <div className='absolute bg-gradient-to-tr from-[#A2D29D] via-[#4E93DF4D] to-[#101010] top-0 left-0 blur-3xl opacity-20 rounded-full h-24 w-[20rem]'></div>
                        <ul className="space-y-2">
                            <li><a href="/" className="hover:text-white">Home</a></li>
                            <li><a href="/" className="hover:text-white">About Us</a></li>
                            <li><a href="/" className="hover:text-white">Key Products</a></li>
                            <li><a href="/" className="hover:text-white">Roadmap</a></li>
                        </ul>
                    </div>
                    
                    {/* Right Section */}
                    <div className="space-y-2">
                        <ul className="space-y-2">
                            <li><a href="/" className="hover:text-white">Team</a></li>
                            <li><a href="/" className="hover:text-white">Blogs</a></li>
                            <li><a href="/" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                </div>

                {/* Logo and Social Icons */}
                <div className="text-center md:text-right flex flex-col items-center md:items-end gap-4">
                    <img src={logo} alt="Medical Veda Logo" className="w-28 md:w-32" />
                    <h4 className="text-lg">Stay Connected</h4>
                    <div className="flex space-x-4 text-2xl">
                        <a href="/" className="text-white hover:text-blue-500"><FaFacebook /></a>
                        <a href="/" className="text-white hover:text-blue-500"><FaTwitter /></a>
                        <a href="/" className="text-white hover:text-blue-500"><FaTelegramPlane /></a>
                    </div>
                </div>

            </div>

            {/* Footer Bottom Section */}
            <div className="text-center mt-8">
                <p className="text-gray-400 text-sm">
                    Copyright © 2024 MedicalVEDA. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;

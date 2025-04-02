// components/Footer.tsx
'use client';
import React from "react";
import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa"; // Font Awesome icons

export function Footer() {
  return (
    <footer className="w-full bg-[#010114] px-4 text-white pt-8 flex flex-col md:flex-row flex-wrap items-start justify-between md:px-12">
      {/* Logo and Description */}
      <div className="text-center md:text-left flex flex-col items-center md:items-start">
        <img className="w-40 h-16" src="/images/logo-text.svg" alt="Persisst Logo" />
        <p className="my-4 max-w-md text-center md:text-left">
          PerSisst Lab develops intelligent, assistive solutions using advanced sensing to address challenges in cognition and smart living.
        </p>
      </div>

      {/* Quick Links */}
      <div className="text-left">
        <h2 className="font-bold text-xl mt-4 text-white">Quick Links</h2>
        <div className="w-30 h-1 border-b-2 border-purple-400 rounded-2xl my-2"></div>
        <a href="/" className="text-gray-400 block">Home</a>
        <a href="/About/Lab" className="text-gray-400 block">About us</a>
        <a href="/Research" className="text-gray-400 block">Research</a>
        <a href="/JoinUs/FAQs" className="text-gray-400 block">FAQs</a>
        <a href="/JoinUs" className="text-gray-400 block">Join Us</a>
      </div>

      {/* Follow Us */}
      <div className="text-left">
        <h2 className="font-bold text-xl mt-4 text-white">Follow Us</h2>
        <div className="w-30 h-1 border-b-2 border-purple-400 rounded-2xl my-2"></div>
        <div className="flex flex-col space-y-4">
          <a href="https://dblp.org/pid/191/4760.html" className="flex items-center">
            <FaLinkedin className="w-5 h-5 mr-2 text-gray-400" />
            <span className="text-gray-400">LinkedIn</span>
          </a>
          <a href="https://dblp.org/pid/191/4760.html" className="flex items-center">
            <FaFacebook className="w-5 h-5 mr-2 text-gray-400" />
            <span className="text-gray-400">Facebook</span>
          </a>
          <a href="https://dblp.org/pid/191/4760.html" className="flex items-center">
            <FaTwitter className="w-5 h-5 mr-2 text-gray-400" />
            <span className="text-gray-400">Twitter</span>
          </a>
        </div>
      </div>

      {/* Contact Us */}
      <div className="text-left">
        <h2 className="font-bold text-xl mt-4 text-white">Contact Us</h2>
        <div className="w-32 h-1 border-b-2 border-purple-400 rounded-2xl my-2"></div>
        <p className="text-gray-400">PerSisst Labs</p>
        <p className="text-gray-400">A-413 (R&D block)</p>
        <p className="text-gray-400">Department of Human Centered Design, IIIT-Delhi</p>
        <p className="text-gray-400">Okhla Phase III, New Delhi, Delhi 110020</p>
        <p className="text-gray-400">
          Email:{" "}
          <a href="mailto:persisst@iiitd.ac.in" className="underline">
            persisst@iiitd.ac.in
          </a>
        </p>
      </div>

      {/* Copyright Section */}
      <div className="w-full text-center pb-3 text-gray-500 mt-5">
        <p>&copy; 2024 PerSisst Labs, IIIT-Delhi. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

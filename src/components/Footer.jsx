import React from "react";

const Footer = () => (
  <footer className="bg-gray-800 text-white p-4 mt-8">
    <div className="container mx-auto text-center space-y-2 md:flex md:justify-between md:items-center md:space-y-0">
      <p>© {new Date().getFullYear()} Klajdi Taxi - Tirana</p>
      <p>Contact us: +355 123 456 789 | Email: info@klajditaxi.com</p>
      <div className="flex justify-center space-x-4 mt-2 md:mt-0">
        <a
          href="https://www.facebook.com/klajditaxi"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          href="https://www.instagram.com/klajditaxi"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;

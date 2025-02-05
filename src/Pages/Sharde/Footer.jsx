import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importing social media icons

const Footer = () => {
  return (
    <footer className="footer bg-gradient-to-r from-gray-800 via-blue-900 to-indigo-800 text-white p-10 mt-10">
      <div className="footer-content grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Us Section */}
        <div className="about-us">
          <h3 className="text-2xl font-semibold mb-4">About ZOOMEATS</h3>
          <p>Your go-to platform for fast and delicious food delivery. Bringing the best local restaurants right to your door with just a few clicks.</p>
        </div>

        {/* Quick Links Section */}
        <div className="quick-links">
          <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
          <ul>
            <li><a href="/about" className="hover:text-indigo-300 transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-indigo-300 transition">Contact</a></li>
            <li><a href="/faq" className="hover:text-indigo-300 transition">FAQ</a></li>
            <li><a href="/terms" className="hover:text-indigo-300 transition">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="social-media">
          <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300 transition">
              <FaFacebook size={30} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300 transition">
              <FaTwitter size={30} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300 transition">
              <FaInstagram size={30} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300 transition">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="contact-info">
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <p>📍 1234 Food Street, Foodie City</p>
          <p>📞 +1 800-123-4567</p>
          <p>✉️ support@zoomeats.com</p>
        </div>
      </div>

      <div className="footer-bottom mt-8">
        <div className="text-center">
          <p>Copyright © {new Date().getFullYear()} ZOOMEATS. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

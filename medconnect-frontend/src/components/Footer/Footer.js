
// components/Footer/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = {
    About: ['About Us', 'Blog', 'Careers', 'Press', 'Contact Us'],
    'For Patients': ['Search Doctors', 'Search Clinics', 'Covid Hospital Listing', 'Consultation', 'Teleconsultation'],
    'For Doctors': ['Join Us', 'Sign In', 'Become a Partner', 'How It Works'],
    'Follow Us': ['Facebook', 'Twitter', 'Instagram', 'LinkedIn']
  };

  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-bold">{title}</h4>
            <ul className="space-y-2">
              {links.map(link => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase().replace(/\s+/g, '-')}`}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
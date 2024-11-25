// components/Header/Header.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          MedConnect
        </Link>
        <nav className="space-x-6">
          <Link to="/find-doctors" className="text-gray-600 hover:text-blue-600">
            Find Doctors
          </Link>
          <Link to="/video-consultation" className="text-gray-600 hover:text-blue-600">
            Video Consultation
          </Link>
          <Link to="/surgeries" className="text-gray-600 hover:text-blue-600">
            Surgeries
          </Link>
          <button
            onClick={() => navigate('/appointments')}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Book Appointment
          </button>
          <button
            onClick={() => navigate('/login')}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Login
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;



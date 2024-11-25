// pages/FindDoctorsPage/FindDoctorsPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FindDoctorsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('');

  const specialties = [
    'Cardiology',
    'Dermatology',
    'Neurology',
    'Orthopedics',
    'Pediatrics',
    'Psychiatry'
  ];

  const doctors = [
    {
      id: 1,
      name: 'Dr. John Smith',
      specialty: 'Cardiology',
      experience: '15 years',
      rating: 4.8,
      image: '/api/placeholder/100/100'
    },
    {
      id: 2,
      name: 'Dr. Sarah Johnson',
      specialty: 'Dermatology',
      experience: '10 years',
      rating: 4.9,
      image: '/api/placeholder/100/100'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Find Doctors</h1>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search doctors..."
            className="flex-1 p-2 border rounded"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            className="p-2 border rounded"
            value={selectedSpecialty}
            onChange={(e) => setSelectedSpecialty(e.target.value)}
          >
            <option value="">All Specialties</option>
            {specialties.map(specialty => (
              <option key={specialty} value={specialty}>{specialty}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map(doctor => (
          <Link key={doctor.id} to={`/doctor/${doctor.id}`}>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h2 className="text-xl font-semibold">{doctor.name}</h2>
                  <p className="text-gray-600">{doctor.specialty}</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">{doctor.experience} experience</span>
                <span className="text-blue-600 font-semibold">★ {doctor.rating}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FindDoctorsPage;

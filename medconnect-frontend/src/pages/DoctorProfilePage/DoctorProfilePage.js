// pages/DoctorProfilePage/DoctorProfilePage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const DoctorProfilePage = () => {
  const { id } = useParams();
  
  // Mock doctor data - replace with API call
  const doctor = {
    name: 'Dr. John Smith',
    specialty: 'Cardiology',
    experience: '15 years',
    rating: 4.8,
    education: 'MBBS, MD - Cardiology',
    image: '/api/placeholder/200/200',
    about: 'Dr. Smith is a highly experienced cardiologist with expertise in treating various heart conditions.',
    availability: {
      mon: '9:00 AM - 5:00 PM',
      tue: '9:00 AM - 5:00 PM',
      wed: '9:00 AM - 5:00 PM',
      thu: '9:00 AM - 5:00 PM',
      fri: '9:00 AM - 5:00 PM'
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full rounded-lg mb-4"
            />
            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 mb-2">
              Book Appointment
            </button>
            <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700">
              Video Consultation
            </button>
          </div>
          
          <div className="md:w-2/3">
            <h1 className="text-3xl font-bold mb-4">{doctor.name}</h1>
            <p className="text-gray-600 mb-4">{doctor.specialty}</p>
            <p className="text-gray-600 mb-4">{doctor.experience} experience</p>
            <p className="text-blue-600 font-semibold mb-4">★ {doctor.rating}</p>
            
            <h2 className="text-xl font-semibold mb-2">About</h2>
            <p className="text-gray-600 mb-4">{doctor.about}</p>
            
            <h2 className="text-xl font-semibold mb-2">Education</h2>
            <p className="text-gray-600 mb-4">{doctor.education}</p>
            
            <h2 className="text-xl font-semibold mb-2">Availability</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Object.entries(doctor.availability).map(([day, time]) => (
                <div key={day} className="bg-gray-100 p-3 rounded">
                  <p className="font-semibold capitalize">{day}</p>
                  <p className="text-gray-600">{time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfilePage;

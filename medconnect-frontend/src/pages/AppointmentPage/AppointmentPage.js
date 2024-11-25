// pages/AppointmentPage/AppointmentPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const AppointmentPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    patientName: '',
    doctor: '',
    appointmentDate: '',
    appointmentTime: '',
    reason: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.patientName || !formData.doctor || !formData.appointmentDate) {
      setError('Please fill in all required fields.');
      return;
    }
    // Handle appointment booking logic here
    navigate('/');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto py-8">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
          <h1 className="text-2xl font-bold mb-6">Book an Appointment</h1>
          {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</div>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Patient Name *</label>
              <input
                type="text"
                name="patientName"
                value={formData.patientName}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            {/* Add more form fields... */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
            >
              Book Appointment
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AppointmentPage;
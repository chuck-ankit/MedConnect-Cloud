
// pages/VideoConsultationPage/VideoConsultationPage.js
import React from 'react';

const VideoConsultationPage = () => {
  const consultationTypes = [
    {
      title: 'General Consultation',
      description: 'Consult with general physicians for common health issues',
      price: '₹499'
    },
    {
      title: 'Specialist Consultation',
      description: 'Connect with specialized doctors for specific health concerns',
      price: '₹999'
    },
    {
      title: 'Follow-up Consultation',
      description: 'Follow up with your doctor about your treatment progress',
      price: '₹299'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Video Consultation</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {consultationTypes.map((type, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">{type.title}</h2>
            <p className="text-gray-600 mb-4">{type.description}</p>
            <p className="text-2xl font-bold text-blue-600 mb-4">{type.price}</p>
            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
              Book Consultation
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoConsultationPage;
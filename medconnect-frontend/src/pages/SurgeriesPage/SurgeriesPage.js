
// pages/SurgeriesPage/SurgeriesPage.js
import React from 'react';

const SurgeriesPage = () => {
  const surgeryTypes = [
    {
      title: 'Orthopedic Surgery',
      description: 'Joint replacements, spine surgery, and fracture repair',
      imageUrl: '/api/placeholder/300/200'
    },
    {
      title: 'Cardiac Surgery',
      description: 'Heart bypass, valve replacement, and other cardiac procedures',
      imageUrl: '/api/placeholder/300/200'
    },
    {
      title: 'General Surgery',
      description: 'Appendectomy, gallbladder removal, and hernia repair',
      imageUrl: '/api/placeholder/300/200'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Surgical Procedures</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {surgeryTypes.map((surgery, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={surgery.imageUrl}
              alt={surgery.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">{surgery.title}</h2>
              <p className="text-gray-600 mb-4">{surgery.description}</p>
              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SurgeriesPage;
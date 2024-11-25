
// components/ConsultationCard/ConsultationCard.js
import React from 'react';

const ConsultationCard = ({ title }) => (
  <div className="bg-white p-6 shadow-lg rounded-lg text-center">
    <h3 className="text-xl font-semibold">{title}</h3>
    <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded">CONSULT NOW</button>
  </div>
);

export default ConsultationCard;
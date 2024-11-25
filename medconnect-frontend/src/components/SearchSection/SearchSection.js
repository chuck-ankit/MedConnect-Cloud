
// components/SearchSection/SearchSection.js
import React from 'react';

const SearchSection = ({ searchQuery, location, onSearchChange, onLocationChange }) => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Search for Doctors, Clinics, and More</h2>
        <div className="flex justify-center space-x-4">
          <input
            type="text"
            value={searchQuery}
            onChange={onSearchChange}
            placeholder="Search for doctors, clinics..."
            className="p-2 border rounded w-80"
          />
          <input
            type="text"
            value={location}
            onChange={onLocationChange}
            placeholder="Enter location"
            className="p-2 border rounded w-80"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Search</button>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
// pages/HomePage/HomePage.js
import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import SearchSection from '../../components/SearchSection/SearchSection';
import ConsultationCard from '../../components/ConsultationCard/ConsultationCard';
import Footer from '../../components/Footer/Footer';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");

  const consultationIssues = [
    "Period doubts or Pregnancy",
    "Acne, pimple or skin issues",
    "Performance issues in bed",
    "Cold, cough or fever",
    "Child not feeling well",
    "Depression or anxiety"
  ];

  const clinicServices = [
    { title: "Dentist", description: "Teething troubles? Schedule a dental checkup" },
    { title: "Gynecologist/Obstetrician", description: "Explore for women's health, pregnancy, and infertility treatments" },
    { title: "Dietitian/Nutrition", description: "Get guidance on eating right, weight management, and sports nutrition" },
    { title: "Physiotherapist", description: "Pulled a muscle? Get it treated by a trained physiotherapist" }
  ];

  return (
    <div>
      {/* <Header /> */}
      <SearchSection
        searchQuery={searchQuery}
        location={location}
        onSearchChange={(e) => setSearchQuery(e.target.value)}
        onLocationChange={(e) => setLocation(e.target.value)}
      />
      
      {/* Online Consultation Section */}
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Consult Top Doctors Online</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultationIssues.map((issue) => (
              <ConsultationCard key={issue} title={issue} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
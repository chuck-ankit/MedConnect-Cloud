import React, { useState } from "react";

const HomePage = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");

  // States for Login Form
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  // States for Appointment Form
  const [patientName, setPatientName] = useState("");
  const [doctor, setDoctor] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentError, setAppointmentError] = useState("");

  // Handlers for modals
  const toggleLoginModal = () => setIsLoginOpen(!isLoginOpen);
  const toggleAppointmentModal = () => setIsAppointmentOpen(!isAppointmentOpen);

  // Handle Login form submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) {
      setLoginError("Please enter both email and password.");
    } else {
      setLoginError("");
      console.log("Logged in with:", loginEmail, loginPassword);
      toggleLoginModal(); // Close modal after login
    }
  };

  // Handle Appointment form submission
  const handleAppointmentSubmit = (e) => {
    e.preventDefault();
    if (!patientName || !doctor || !appointmentDate) {
      setAppointmentError("Please fill in all fields.");
    } else {
      setAppointmentError("");
      console.log("Appointment booked for:", patientName, doctor, appointmentDate);
      toggleAppointmentModal(); // Close modal after booking
    }
  };

  // Handle search query and location changes
  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const handleLocationChange = (e) => setLocation(e.target.value);

  return (
    <div>
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto flex items-center justify-between p-4">
          <h1 className="text-2xl font-bold text-blue-600">MedConnect</h1>
          <nav className="space-x-6">
            <a href="#find-doctors" className="text-gray-600 hover:text-blue-600">
              Find Doctors
            </a>
            <a href="#video-consultation" className="text-gray-600 hover:text-blue-600">
              Video Consultation
            </a>
            <a href="#surgeries" className="text-gray-600 hover:text-blue-600">
              Surgeries
            </a>
            <button
              onClick={toggleAppointmentModal}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Book Appointment
            </button>
            <button
              onClick={toggleLoginModal}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Login
            </button>
          </nav>
        </div>
      </header>

      {/* Search Bar and Location Input */}
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Search for Doctors, Clinics, and More</h2>
          <div className="flex justify-center space-x-4">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search for doctors, clinics..."
              className="p-2 border rounded w-80"
            />
            <input
              type="text"
              value={location}
              onChange={handleLocationChange}
              placeholder="Enter location"
              className="p-2 border rounded w-80"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Search</button>
          </div>
        </div>
      </section>

      {/* Consultation Services */}
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Consult Top Doctors Online</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {["Period doubts or Pregnancy", "Acne, pimple or skin issues", "Performance issues in bed", "Cold, cough or fever", "Child not feeling well", "Depression or anxiety"].map((issue) => (
              <div key={issue} className="bg-white p-6 shadow-lg rounded-lg text-center">
                <h3 className="text-xl font-semibold">{issue}</h3>
                <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded">CONSULT NOW</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In-Clinic Consultations */}
      <section className="bg-white py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Book an Appointment for an In-Clinic Consultation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Dentist", description: "Teething troubles? Schedule a dental checkup" },
              { title: "Gynecologist/Obstetrician", description: "Explore for women's health, pregnancy, and infertility treatments" },
              { title: "Dietitian/Nutrition", description: "Get guidance on eating right, weight management, and sports nutrition" },
              { title: "Physiotherapist", description: "Pulled a muscle? Get it treated by a trained physiotherapist" },
            ].map((service) => (
              <div key={service.title} className="bg-blue-100 p-6 rounded text-center shadow-lg">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-4">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Articles */}
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Read Top Articles from Health Experts</h2>
          <p className="text-lg mb-6">Health articles that keep you informed about good health practices and achieving your goals.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "12 Coronavirus Myths and Facts That You Should Be Aware Of", author: "Dr. Diana Borgio" },
              { title: "Eating Right to Build Immunity Against Cold and Viral Infections", author: "Dr. Diana Borgio" },
            ].map((article) => (
              <div key={article.title} className="bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold">{article.title}</h3>
                <p className="mt-2 text-gray-600">By {article.author}</p>
              </div>
            ))}
          </div>
          <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded">See All Articles</button>
        </div>
      </section>

      {/* User Reviews */}
      <section className="bg-white py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Users Have to Say</h2>
          <div className="text-lg text-gray-600">"MedConnect has been a lifesaver. The doctors are really helpful, and the consultations are seamless!"</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h4 className="font-bold">About</h4>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">For Patients</h4>
            <ul className="space-y-2">
              <li>Search Doctors</li>
              <li>Search Clinics</li>
              <li>Covid Hospital Listing</li>
              <li>Consultation</li>
              <li>Teleconsultation</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">For Doctors</h4>
            <ul className="space-y-2">
              <li>Join Us</li>
              <li>Sign In</li>
              <li>Become a Partner</li>
              <li>How It Works</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">Follow Us</h4>
            <ul className="space-y-2">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

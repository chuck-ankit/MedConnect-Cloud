import React, { useState } from "react";

const HomePage = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  // Handlers for modals
  const toggleLoginModal = () => setIsLoginOpen(!isLoginOpen);
  const toggleAppointmentModal = () => setIsAppointmentOpen(!isAppointmentOpen);

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

      {/* Search Bar */}
      <section className="bg-gray-100 py-6">
        <div className="container mx-auto flex flex-col items-center">
          <div className="flex bg-white shadow rounded w-full max-w-2xl">
            <input
              type="text"
              placeholder="Pune"
              className="flex-1 p-4 border-r"
            />
            <input
              type="text"
              placeholder="Search doctors, clinics, hospitals, etc."
              className="flex-1 p-4"
            />
            <button className="px-6 bg-blue-600 text-white font-bold">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="container mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-100 p-4 rounded text-center">
          <img src="placeholder1.png" alt="Video Consultation" className="mx-auto mb-4" />
          <h3 className="font-bold text-lg">Instant Video Consultation</h3>
          <p>Connect within 60 seconds</p>
        </div>
        <div className="bg-green-100 p-4 rounded text-center">
          <img src="placeholder2.png" alt="Find Doctors" className="mx-auto mb-4" />
          <h3 className="font-bold text-lg">Find Doctors Near You</h3>
          <p>Confirmed appointments</p>
        </div>
        <div className="bg-purple-100 p-4 rounded text-center">
          <img src="placeholder3.png" alt="Surgeries" className="mx-auto mb-4" />
          <h3 className="font-bold text-lg">Surgeries</h3>
          <p>Safe and trusted surgery centers</p>
        </div>
      </section>

      {/* Modals */}
      {isLoginOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow w-96">
            <h2 className="text-xl font-bold mb-4">Login</h2>
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-4 p-2 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-4 p-2 border rounded"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
              Login
            </button>
            <button
              onClick={toggleLoginModal}
              className="mt-4 text-gray-600 hover:underline"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {isAppointmentOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow w-96">
            <h2 className="text-xl font-bold mb-4">Book an Appointment</h2>
            <input
              type="text"
              placeholder="Patient Name"
              className="w-full mb-4 p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Preferred Doctor"
              className="w-full mb-4 p-2 border rounded"
            />
            <input
              type="date"
              className="w-full mb-4 p-2 border rounded"
            />
            <button className="bg-green-500 text-white px-4 py-2 rounded w-full">
              Book Appointment
            </button>
            <button
              onClick={toggleAppointmentModal}
              className="mt-4 text-gray-600 hover:underline"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

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
              <li>Health Articles</li>
              <li>Medicines</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">For Providers</h4>
            <ul className="space-y-2">
              <li>Practo Profile</li>
              <li>Ray Tab</li>
              <li>Practo Pro</li>
              <li>Insta by Practo</li>
              <li>Qikwell by Practo</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">Social</h4>
            <ul className="space-y-2">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Youtube</li>
              <li>Github</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

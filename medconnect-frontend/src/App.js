import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import AppointmentPage from './pages/AppointmentPage';
import VideoConsultationPage from './pages/VideoConsultationPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/appointments" element={<AppointmentPage />} />
          <Route path="/video-consultation" element={<VideoConsultationPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

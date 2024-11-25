// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Page imports
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import AppointmentPage from './pages/AppointmentPage/AppointmentPage';
import VideoConsultationPage from './pages/VideoConsultationPage/VideoConsultationPage';
import FindDoctorsPage from './pages/FindDoctorsPage/FindDoctorsPage';
import SurgeriesPage from './pages/SurgeriesPage/SurgeriesPage';
import DoctorProfilePage from './pages/DoctorProfilePage/DoctorProfilePage';
import UserDashboardPage from './pages/UserDashboardPage/UserDashboardPage';
import BlogPage from './pages/BlogPage/BlogPage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import ContactPage from './pages/ContactPage/ContactPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

// Protected Route Component
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

// Layout Components
import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes with Main Layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/find-doctors" element={<FindDoctorsPage />} />
          <Route path="/video-consultation" element={<VideoConsultationPage />} />
          <Route path="/surgeries" element={<SurgeriesPage />} />
          <Route path="/doctor/:id" element={<DoctorProfilePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>

        {/* Protected Routes with Dashboard Layout */}
        <Route element={<DashboardLayout />}>
          <Route
            path="/dashboard/*"
            element={
              <ProtectedRoute>
                <Routes>
                  <Route path="/" element={<UserDashboardPage />} />
                  <Route path="/appointments" element={<AppointmentPage />} />
                  <Route path="/profile" element={<UserDashboardPage />} />
                  <Route path="/medical-records" element={<UserDashboardPage />} />
                  <Route path="/prescriptions" element={<UserDashboardPage />} />
                </Routes>
              </ProtectedRoute>
            }
          />
        </Route>

        {/* 404 Not Found Route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;

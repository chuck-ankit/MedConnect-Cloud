
// layouts/DashboardLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '../components/DashboardSidebar/DashboardSidebar';
import DashboardHeader from '../components/DashboardHeader/DashboardHeader';

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex">
      <DashboardSidebar />
      <div className="flex-1">
        <DashboardHeader />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

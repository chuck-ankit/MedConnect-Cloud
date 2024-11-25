import React from 'react';
import DashboardSidebar from '../components/DashboardSidebar/DashboardSidebar';
import DashboardHeader from '../components/DashboardHeader/DashboardHeader';

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <DashboardHeader />
      <div className="dashboard-content">
        <DashboardSidebar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;

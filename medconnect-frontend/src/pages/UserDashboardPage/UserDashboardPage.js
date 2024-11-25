// UserDashboardPage.js
import React from 'react';

const UserDashboardPage = () => {
  const dashboardItems = [
    { title: 'Appointments', description: 'View and manage your appointments.' },
    { title: 'Medical Records', description: 'Access your medical history and documents.' },
    { title: 'Prescriptions', description: 'Check your prescription history and details.' },
  ];

  return (
    <div>
      <h1>User Dashboard</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {dashboardItems.map((item, index) => (
          <div key={index} className="dashboard-item">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboardPage;

import React, { useState } from 'react';

import Header from '../partials/Header';
import TabNavigation from '../components/Layout/TabNavigation';
import OnPageAnalysis from '../components/OnPage/OnPageAnalysis';
import DashboardCard04 from '../partials/dashboard/DashboardCard04';
import DashboardCard05 from '../partials/dashboard/DashboardCard05';
import DashboardCard06 from '../partials/dashboard/DashboardCard06';

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('onpage');

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Header remains for user controls and branding */}
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* New Tab Navigation */}
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Content Area */}
      <main className="grow overflow-y-auto bg-gray-100 dark:bg-gray-900">
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          
          {/* On-Page Analysis Tab */}
          {activeTab === 'onpage' && (
            <OnPageAnalysis />
          )}

          {/* Lighthouse Audit Tab */}
          {activeTab === 'lighthouse' && (
            <div className="space-y-8">
              <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Lighthouse Audit</h1>
              
              {/* Cards */}
              <div className="grid grid-cols-12 gap-6">
                {/* Core Web Vitals */}
                <DashboardCard04 />
                {/* Performance Metrics */}
                <DashboardCard05 />
                {/* Accessibility Score */}
                <DashboardCard06 />
              </div>
            </div>
          )}
          
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
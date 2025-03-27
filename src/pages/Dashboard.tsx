import { useState } from 'react';
import { useAuthStore } from '../store/auth';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import DataTable from '../components/DataTable';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar onMenuClick={() => setSidebarOpen(true)} />
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <main className="lg:pl-64 pt-16">
        <div className="px-4 sm:px-6 lg:px-8 py-8">
          <DataTable />
        </div>
      </main>
    </div>
  );
}
import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, Truck, MapPin, Users, BarChart3, Bell, Search, AlertTriangle, CheckCircle2
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import DashboardHome from './DashboardHome';
import FleetManagement from './FleetManagement';
import BinLocations from './BinLocations';
import CitizenManagement from './CitizenManagement';
import Analytics from './Analytics';

function AdminDashboard() {
  const [notifications] = useState([
    { id: 1, message: 'New citizen report received', time: '5 min ago' },
    { id: 2, message: 'Bin overflow alert - Central Park', time: '1 hour ago' },
  ]);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {/* Header */}
        <Header notifications={notifications} />

        {/* Dashboard Content */}
        <main className="p-8 overflow-auto h-[calc(100vh-4rem)]">
          <DashboardOverview />
          <Routes>
            <Route path="dashboard" element={<DashboardHome />} />
            <Route path="fleet" element={<FleetManagement />} />
            <Route path="bins" element={<BinLocations />} />
            <Route path="citizens" element={<CitizenManagement />} />
            <Route path="analytics" element={<Analytics />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

/* Sidebar Component */
function Sidebar() {
  const location = useLocation();

  const navItems = [
    { path: "/admin/dashboard", icon: <LayoutDashboard />, text: "Dashboard" },
    { path: "/admin/fleet", icon: <Truck />, text: "Fleet Management" },
    { path: "/admin/bins", icon: <MapPin />, text: "Bin Locations" },
    { path: "/admin/citizens", icon: <Users />, text: "Citizens" },
    { path: "/admin/analytics", icon: <BarChart3 />, text: "Analytics" },
  ];

  return (
    <div className="w-72 bg-white shadow-lg">
      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
      </div>
      <nav className="mt-10">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-4 w-full px-6 py-4 text-lg transition-colors ${
              location.pathname === item.path
                ? 'bg-green-50 text-green-600 border-r-4 border-green-600'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            {item.icon}
            <span>{item.text}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}

/* Header Component */
function Header({ notifications }) {
  return (
    <header className="bg-white shadow-md h-20 flex items-center px-10">
      <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3 w-96">
        <Search className="text-gray-400 w-6 h-6" />
        <input type="text" placeholder="Search..." className="bg-transparent border-none focus:outline-none ml-3 w-full text-lg"/>
      </div>
      <div className="ml-auto flex items-center gap-6">
        <button className="p-3 rounded-full hover:bg-gray-100 relative">
          <Bell className="w-6 h-6 text-gray-600" />
          <span className="absolute top-0 right-0 h-5 w-5 bg-red-500 text-white rounded-full text-sm flex items-center justify-center">
            {notifications.length}
          </span>
        </button>
        <span className="text-lg font-medium">Admin</span>
      </div>
    </header>
  );
}

/* Dashboard Overview Section */
function DashboardOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mb-10">
      <LiveMap />
      <TaskManagement />
      <AlertsSystem />
      <UserManagement />
      <AnalyticsChart />
    </div>
  );
}

/* Live Map Placeholder */
function LiveMap() {
  return (
    <div className="bg-white p-7 rounded-lg shadow-lg h-90">
      <h2 className="text-xl font-semibold mb-6">Live Map - Bin & Route Locations</h2>
      <div className="h-full bg-gray-200 rounded flex items-center justify-center">
        <span className="text-gray-400 text-lg">[Map Placeholder]</span>
      </div>
    </div>
  );
}

/* Task Management */
function TaskManagement() {
  const tasks = [
    { driver: "John Smith", route: "Route A-1", status: "In Progress" },
    { driver: "Sarah Johnson", route: "Route B-2", status: "Pending" },
    { driver: "Mike Brown", route: "Route C-3", status: "Completed" },
  ];

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg h-96">
      <h2 className="text-xl font-semibold mb-6">Task Management</h2>
      <ul className="space-y-4">
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center bg-gray-100 px-6 py-4 rounded text-lg">
            <span>{task.driver} - {task.route}</span>
            <span className={`px-3 py-2 rounded-lg text-sm font-medium ${
              task.status === "Completed" ? "bg-green-500 text-white" :
              task.status === "In Progress" ? "bg-blue-500 text-white" :
              "bg-yellow-500 text-white"
            }`}>
              {task.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* Alerts System */
function AlertsSystem() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg h-96">
      <h2 className="text-xl font-semibold mb-6">Recent Alerts</h2>
      <ul className="space-y-4">
        <li className="flex items-center gap-4 bg-red-100 p-4 rounded-lg text-lg">
          <AlertTriangle className="text-red-600" />
          <span>Bin Overflow at Central Park</span>
        </li>
        <li className="flex items-center gap-4 bg-yellow-100 p-4 rounded-lg text-lg">
          <CheckCircle2 className="text-yellow-600" />
          <span>Scheduled Maintenance - Main Street</span>
        </li>
      </ul>
    </div>
  );
}

/* User Management */
function UserManagement() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg h-96">
      <h2 className="text-xl font-semibold mb-6">User Management</h2>
      <ul className="space-y-4">
        <li className="flex justify-between bg-gray-100 px-6 py-4 rounded text-lg">
          <span>Alice Johnson</span> <span className="text-gray-600">Admin</span>
        </li>
        <li className="flex justify-between bg-gray-100 px-6 py-4 rounded text-lg">
          <span>Bob Smith</span> <span className="text-gray-600">Staff</span>
        </li>
      </ul>
    </div>
  );
}

/* Analytics Chart */
function AnalyticsChart() {
  const data = [
    { month: 'Jan', wasteCollected: 200 },
    { month: 'Feb', wasteCollected: 350 },
    { month: 'Mar', wasteCollected: 300 },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-4">Analytics - Waste Collection Trends</h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="wasteCollected" stroke="#22c55e" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
export default AdminDashboard;

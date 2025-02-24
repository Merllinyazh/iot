import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react';
import AdminDashboard from './components/admin/AdminDashboard';
import CitizenPortal from './components/citizen/CitizenPortal';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <Link to="/" className="flex items-center">
                  <Trash2 className="h-8 w-8 text-green-600" />
                  <span className="ml-2 text-xl font-bold text-gray-800">WasteWatch</span>
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <Link
                  to="/citizen"
                  className="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Citizen Portal
                </Link>
                <Link
                  to="/admin"
                  className="bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded-md text-sm font-medium"
                >
                  Admin Dashboard
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
          <Route path="/citizen" element={<CitizenPortal />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to WasteWatch
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Smart waste management for a cleaner city
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/citizen"
            className="bg-white text-green-600 border border-green-600 px-6 py-3 rounded-lg text-lg font-medium hover:bg-green-50"
          >
            Report an Issue
          </Link>
          <Link
            to="/admin"
            className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-green-700"
          >
            Access Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
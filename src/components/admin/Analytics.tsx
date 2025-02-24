import React from 'react';
import { BarChart3, TrendingUp, ArrowUp, ArrowDown } from 'lucide-react';

function Analytics() {
  const wasteData = {
    daily: [
      { date: '2024-03-10', amount: 250 },
      { date: '2024-03-11', amount: 320 },
      { date: '2024-03-12', amount: 280 },
      { date: '2024-03-13', amount: 300 },
      { date: '2024-03-14', amount: 290 },
      { date: '2024-03-15', amount: 350 },
    ],
    monthly: {
      total: 8500,
      change: '+12%',
      trend: 'up'
    },
    yearly: {
      total: 102000,
      change: '+8%',
      trend: 'up'
    }
  };

  const topLocations = [
    { location: 'Central Park', amount: 450, change: '+15%' },
    { location: 'Times Square', amount: 380, change: '-5%' },
    { location: 'Brooklyn Bridge', amount: 320, change: '+8%' },
    { location: 'Grand Central', amount: 290, change: '+12%' },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
        <div className="flex gap-2">
          <select className="bg-white border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500">
            <option value="7days">Last 7 Days</option>
            <option value="30days">Last 30 Days</option>
            <option value="90days">Last 90 Days</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Daily Average</h3>
            <BarChart3 className="w-6 h-6 text-green-600" />
          </div>
          <div className="flex items-baseline">
            <span className="text-3xl font-bold">298</span>
            <span className="ml-2 text-sm text-gray-500">kg/day</span>
          </div>
          <div className="flex items-center mt-2">
            <ArrowUp className="w-4 h-4 text-green-500" />
            <span className="text-sm text-green-500 ml-1">12% vs last week</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Monthly Total</h3>
            <TrendingUp className="w-6 h-6 text-blue-600" />
          </div>
          <div className="flex items-baseline">
            <span className="text-3xl font-bold">{wasteData.monthly.total}</span>
            <span className="ml-2 text-sm text-gray-500">kg</span>
          </div>
          <div className="flex items-center mt-2">
            <ArrowUp className="w-4 h-4 text-green-500" />
            <span className="text-sm text-green-500 ml-1">{wasteData.monthly.change} vs last month</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Yearly Projection</h3>
            <BarChart3 className="w-6 h-6 text-purple-600" />
          </div>
          <div className="flex items-baseline">
            <span className="text-3xl font-bold">{wasteData.yearly.total}</span>
            <span className="ml-2 text-sm text-gray-500">kg</span>
          </div>
          <div className="flex items-center mt-2">
            <ArrowUp className="w-4 h-4 text-green-500" />
            <span className="text-sm text-green-500 ml-1">{wasteData.yearly.change} projected growth</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Daily Waste Collection</h3>
          <div className="h-64 flex items-end justify-between">
            {wasteData.daily.map((day, index) => (
              <div key={index} className="flex flex-col items-center">
                <div 
                  className="w-12 bg-green-200 rounded-t-lg"
                  style={{ height: `${(day.amount / 400) * 100}%` }}
                >
                  <div 
                    className="w-full bg-green-500 rounded-t-lg transition-all duration-300"
                    style={{ height: `${(day.amount / 400) * 100}%` }}
                  />
                </div>
                <span className="text-xs text-gray-500 mt-2">
                  {new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Top Locations by Waste Volume</h3>
          <div className="space-y-4">
            {topLocations.map((location, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{location.location}</span>
                    <span className="text-sm text-gray-500">{location.amount} kg</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-green-500 rounded-full"
                      style={{ width: `${(location.amount / 500) * 100}%` }}
                    />
                  </div>
                </div>
                <span className={`ml-4 text-sm ${
                  location.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                }`}>
                  {location.change}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
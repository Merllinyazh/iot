import React from 'react';
import { 
  LayoutDashboard, 
  Truck, 
  Trash2, 
  Users, 
  BarChart3,
  AlertTriangle,
  CheckCircle2,
  Clock
} from 'lucide-react';

function DashboardHome() {
  const bins = [
    { id: 1, location: 'Central Park', fillLevel: 85, status: 'critical', lastCollection: '2h ago' },
    { id: 2, location: 'Main Street', fillLevel: 45, status: 'normal', lastCollection: '5h ago' },
    { id: 3, location: 'Market Square', fillLevel: 70, status: 'warning', lastCollection: '3h ago' },
    { id: 4, location: 'City Hall', fillLevel: 30, status: 'normal', lastCollection: '1h ago' },
  ];

  const routes = [
    { id: 1, driver: 'John Smith', status: 'In Progress', completion: 65, bins: 8 },
    { id: 2, driver: 'Sarah Johnson', status: 'Starting', completion: 0, bins: 12 },
    { id: 3, driver: 'Mike Brown', status: 'Completed', completion: 100, bins: 10 },
  ];

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Bins" value="245" change="+12" />
        <StatCard title="Active Routes" value="18" change="+3" />
        <StatCard title="Bins > 75% Full" value="45" change="-8" />
        <StatCard title="Citizen Reports" value="12" change="+5" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Active Routes */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Active Routes</h2>
          <div className="space-y-4">
            {routes.map(route => (
              <div key={route.id} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">{route.driver}</h3>
                  <span className={`px-2 py-1 rounded text-sm ${
                    route.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    route.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {route.status}
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Progress</span>
                    <span>{route.completion}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-green-500 rounded-full"
                      style={{ width: `${route.completion}%` }}
                    />
                  </div>
                  <div className="text-sm text-gray-500">
                    {route.bins} bins remaining
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bin Status */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Critical Bin Status</h2>
          <div className="space-y-4">
            {bins.map(bin => (
              <div key={bin.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium">{bin.location}</h3>
                  <p className="text-sm text-gray-500">Last collection: {bin.lastCollection}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-32">
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div 
                        className={`h-2 rounded-full ${
                          bin.fillLevel > 75 ? 'bg-red-500' : 
                          bin.fillLevel > 50 ? 'bg-yellow-500' : 'bg-green-500'
                        }`}
                        style={{ width: `${bin.fillLevel}%` }}
                      />
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{bin.fillLevel}% full</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Alerts */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Alerts</h2>
          <div className="space-y-4">
            {[
              { id: 1, type: 'overflow', location: 'Central Park', time: '10 min ago', description: 'Bin reaching critical capacity' },
              { id: 2, type: 'maintenance', location: 'Main Street', time: '1h ago', description: 'Scheduled maintenance completed' },
              { id: 3, type: 'citizen', location: 'Market Square', time: '2h ago', description: 'Citizen reported overflow' },
            ].map(alert => (
              <div key={alert.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                {alert.type === 'overflow' ? (
                  <AlertTriangle className="text-red-500" />
                ) : alert.type === 'maintenance' ? (
                  <CheckCircle2 className="text-green-500" />
                ) : (
                  <Users className="text-blue-500" />
                )}
                <div>
                  <h3 className="font-medium">
                    {alert.type === 'overflow' ? 'Bin Overflow' : 
                     alert.type === 'maintenance' ? 'Maintenance Complete' :
                     'Citizen Report'}
                  </h3>
                  <p className="text-sm text-gray-500">{alert.location}</p>
                  <p className="text-sm text-gray-600">{alert.description}</p>
                  <p className="text-xs text-gray-400">{alert.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, change }) {
  const isPositive = change.startsWith('+');
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <div className="flex items-baseline gap-2 mt-2">
        <span className="text-2xl font-bold">{value}</span>
        <span className={`text-sm ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {change}
        </span>
      </div>
    </div>
  );
}

export default DashboardHome;
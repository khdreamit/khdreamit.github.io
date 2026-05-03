import { useState, useEffect } from 'react';
import AdminLogin from './AdminLogin';
import Dashboard from './Dashboard';
import Portfolio from './Portfolio';
import Leads from './Leads';
import Notifications from './Notifications';
import Settings from './Settings';

const MENU = [
  { key: 'dashboard', label: '📊 Dashboard' },
  { key: 'portfolio', label: '🖼️ Portfolio' },
  { key: 'leads', label: '👥 Leads' },
  { key: 'notifications', label: '🔔 Notifications' },
  { key: 'settings', label: '⚙️ Settings' },
];

export default function AdminApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('adminToken'));
  const [activePage, setActivePage] = useState('dashboard');

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) return <AdminLogin onLogin={() => setIsLoggedIn(true)} />;

  const pages = {
    dashboard: <Dashboard />,
    portfolio: <Portfolio />,
    leads: <Leads />,
    notifications: <Notifications />,
    settings: <Settings />,
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#0f172a' }}>
      {/* Sidebar */}
      <div style={{ width: '240px', background: '#1e293b', padding: '24px 0', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '0 24px 24px', borderBottom: '1px solid #334155' }}>
          <h2 style={{ color: '#f1f5f9', margin: 0, fontSize: '18px' }}>🛡️ Admin Panel</h2>
        </div>

        <nav style={{ flex: 1, padding: '16px 0' }}>
          {MENU.map(item => (
            <button key={item.key} onClick={() => setActivePage(item.key)}
              style={{
                display: 'block', width: '100%', textAlign: 'left',
                padding: '12px 24px', border: 'none', cursor: 'pointer',
                background: activePage === item.key ? '#6366f120' : 'transparent',
                color: activePage === item.key ? '#6366f1' : '#94a3b8',
                borderLeft: activePage === item.key ? '3px solid #6366f1' : '3px solid transparent',
                fontSize: '15px', fontWeight: activePage === item.key ? 'bold' : 'normal'
              }}>
              {item.label}
            </button>
          ))}
        </nav>

        <div style={{ padding: '16px 24px', borderTop: '1px solid #334155' }}>
          <button onClick={handleLogout}
            style={{ width: '100%', padding: '10px', background: '#ef444420', color: '#ef4444', border: '1px solid #ef4444', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
            🚪 Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '32px', overflowY: 'auto' }}>
        {pages[activePage]}
      </div>
    </div>
  );
}
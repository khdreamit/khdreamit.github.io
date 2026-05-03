import { useState, useEffect } from 'react';
import { getDashboard } from './adminApi';

export default function Dashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    getDashboard().then(res => setStats(res.data.stats));
  }, []);

  const cards = [
    { label: 'Total Leads', value: stats?.total_leads, color: '#6366f1', icon: '👥' },
    { label: 'New Leads', value: stats?.new_leads, color: '#22c55e', icon: '🆕' },
    { label: 'Portfolio Images', value: stats?.total_portfolio, color: '#f59e0b', icon: '🖼️' },
    { label: 'Unread Notifications', value: stats?.unread_notifications, color: '#ef4444', icon: '🔔' },
  ];

  return (
    <div>
      <h2 style={{ color: '#f1f5f9', marginBottom: '24px' }}>📊 Dashboard</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
        {cards.map((card, i) => (
          <div key={i} style={{
            background: '#1e293b', borderRadius: '12px', padding: '24px',
            borderLeft: `4px solid ${card.color}`
          }}>
            <div style={{ fontSize: '32px', marginBottom: '8px' }}>{card.icon}</div>
            <div style={{ color: '#94a3b8', fontSize: '14px' }}>{card.label}</div>
            <div style={{ color: '#f1f5f9', fontSize: '32px', fontWeight: 'bold' }}>
              {stats ? card.value : '...'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
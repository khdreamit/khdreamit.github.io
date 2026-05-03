import { useState, useEffect } from 'react';
import { getNotifications, markAsRead, markAllRead, deleteNotification } from './adminApi';

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);

  const load = () => getNotifications().then(res => setNotifications(res.data));

  useEffect(() => { load(); }, []);

  const handleMarkAll = async () => { await markAllRead(); load(); };
  const handleRead = async (id) => { await markAsRead(id); load(); };
  const handleDelete = async (id) => { await deleteNotification(id); load(); };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h2 style={{ color: '#f1f5f9' }}>🔔 Notifications</h2>
        <button onClick={handleMarkAll} style={{
          background: '#6366f1', color: 'white', border: 'none',
          padding: '8px 16px', borderRadius: '8px', cursor: 'pointer'
        }}>
          Mark All Read
        </button>
      </div>

      {notifications.length === 0 && (
        <p style={{ color: '#94a3b8' }}>No notifications yet!</p>
      )}

      {notifications.map(n => (
        <div key={n.id} style={{
          background: n.is_read ? '#1e293b' : '#1e3a5f',
          border: `1px solid ${n.is_read ? '#334155' : '#6366f1'}`,
          borderRadius: '10px', padding: '16px', marginBottom: '12px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center'
        }}>
          <div>
            <div style={{ color: '#f1f5f9', fontWeight: 'bold' }}>{n.title}</div>
            <div style={{ color: '#94a3b8', fontSize: '14px' }}>{n.message}</div>
            <div style={{ color: '#475569', fontSize: '12px', marginTop: '4px' }}>{n.created_at}</div>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            {!n.is_read && (
              <button onClick={() => handleRead(n.id)} style={{
                background: '#22c55e', color: 'white', border: 'none',
                padding: '6px 12px', borderRadius: '6px', cursor: 'pointer'
              }}>✓</button>
            )}
            <button onClick={() => handleDelete(n.id)} style={{
              background: '#ef4444', color: 'white', border: 'none',
              padding: '6px 12px', borderRadius: '6px', cursor: 'pointer'
            }}>🗑</button>
          </div>
        </div>
      ))}
    </div>
  );
}
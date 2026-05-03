import { useState } from 'react';
import { loginAdmin } from './adminApi';

export default function AdminLogin({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await loginAdmin(username, password);
      localStorage.setItem('adminToken', res.data.access_token);
      onLogin();
    } catch {
      setError('Wrong username or password!');
    }
    setLoading(false);
  };

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      justifyContent: 'center', background: '#0f172a'
    }}>
      <div style={{
        background: '#1e293b', padding: '40px', borderRadius: '12px',
        width: '100%', maxWidth: '400px', boxShadow: '0 25px 50px rgba(0,0,0,0.5)'
      }}>
        <h2 style={{ color: '#f1f5f9', textAlign: 'center', marginBottom: '8px' }}>
          🔐 Admin Panel
        </h2>
        <p style={{ color: '#94a3b8', textAlign: 'center', marginBottom: '30px' }}>
          Portfolio Admin Login
        </p>

        {error && (
          <div style={{
            background: '#ef444420', border: '1px solid #ef4444',
            color: '#ef4444', padding: '10px', borderRadius: '8px', marginBottom: '20px'
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ color: '#94a3b8', display: 'block', marginBottom: '6px' }}>
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                width: '100%', padding: '12px', borderRadius: '8px',
                background: '#0f172a', border: '1px solid #334155',
                color: '#f1f5f9', fontSize: '16px', boxSizing: 'border-box'
              }}
              placeholder="admin"
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ color: '#94a3b8', display: 'block', marginBottom: '6px' }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%', padding: '12px', borderRadius: '8px',
                background: '#0f172a', border: '1px solid #334155',
                color: '#f1f5f9', fontSize: '16px', boxSizing: 'border-box'
              }}
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%', padding: '12px', borderRadius: '8px',
              background: loading ? '#334155' : '#6366f1',
              color: 'white', fontSize: '16px', fontWeight: 'bold',
              border: 'none', cursor: loading ? 'not-allowed' : 'pointer'
            }}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}
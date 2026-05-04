import { useState } from 'react';
import { loginAdmin } from './adminApi';
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function AdminLogin({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // 👈 NEW
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
          {/* Username */}
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

          {/* Password with Eye Button */}
          <div style={{ marginBottom: '24px', position: 'relative' }}>
            <label style={{ color: '#94a3b8', display: 'block', marginBottom: '6px' }}>
              Password
            </label>

            <input
              type={showPassword ? "text" : "password"} // 👈 toggle
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%', padding: '12px', borderRadius: '8px',
                background: '#0f172a', border: '1px solid #334155',
                color: '#f1f5f9', fontSize: '16px',
                boxSizing: 'border-box',
                paddingRight: '40px' // 👈 icon space
              }}
              placeholder="••••••••"
            />

            {/* 👁️ Eye Button */}
            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: 'absolute',
                right: '12px',
                top: '38px',
                cursor: 'pointer',
                color: '#94a3b8'
              }}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Button */}
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
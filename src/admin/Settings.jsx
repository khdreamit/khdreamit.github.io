import { useState } from 'react';
import axios from 'axios';

export default function Settings() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');

  const handleChange = async (e) => {
    e.preventDefault();
    setMsg(''); setError('');
    try {
      await axios.put(
        `http://127.0.0.1:8000/admin/change-password?old_password=${oldPassword}&new_password=${newPassword}`,
        {},
        { headers: { Authorization: `Bearer ${localStorage.getItem('adminToken')}` } }
      );
      setMsg('Password changed successfully!');
      setOldPassword(''); setNewPassword('');
    } catch {
      setError('Old password is wrong!');
    }
  };

  return (
    <div>
      <h2 style={{ color: '#f1f5f9', marginBottom: '24px' }}>⚙️ Settings</h2>
      <div style={{ background: '#1e293b', borderRadius: '12px', padding: '24px', maxWidth: '400px' }}>
        <h3 style={{ color: '#f1f5f9', marginBottom: '20px' }}>Change Password</h3>

        {msg && <div style={{ background: '#22c55e20', border: '1px solid #22c55e', color: '#22c55e', padding: '10px', borderRadius: '8px', marginBottom: '16px' }}>{msg}</div>}
        {error && <div style={{ background: '#ef444420', border: '1px solid #ef4444', color: '#ef4444', padding: '10px', borderRadius: '8px', marginBottom: '16px' }}>{error}</div>}

        <form onSubmit={handleChange}>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ color: '#94a3b8', display: 'block', marginBottom: '6px' }}>Old Password</label>
            <input type="password" value={oldPassword} onChange={e => setOldPassword(e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: '8px', background: '#0f172a', border: '1px solid #334155', color: '#f1f5f9', boxSizing: 'border-box' }} />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ color: '#94a3b8', display: 'block', marginBottom: '6px' }}>New Password</label>
            <input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: '8px', background: '#0f172a', border: '1px solid #334155', color: '#f1f5f9', boxSizing: 'border-box' }} />
          </div>
          <button type="submit" style={{ background: '#6366f1', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
}
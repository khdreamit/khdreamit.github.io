import { useState, useEffect } from 'react';
import { getAllLeads, updateLeadStatus, deleteLead } from './adminApi';

const STATUS_COLORS = {
  new: '#6366f1',
  contacted: '#f59e0b',
  converted: '#22c55e',
  rejected: '#ef4444',
};

export default function Leads() {
  const [leads, setLeads] = useState([]);
  const [selected, setSelected] = useState(null);

  const load = () => getAllLeads().then(res => setLeads(res.data));

  useEffect(() => { load(); }, []);

  const handleStatus = async (id, status) => {
    await updateLeadStatus(id, status);
    load();
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this lead?')) return;
    await deleteLead(id);
    setSelected(null);
    load();
  };

  return (
    <div>
      <h2 style={{ color: '#f1f5f9', marginBottom: '24px' }}>👥 Leads ({leads.length})</h2>

      <div style={{ display: 'grid', gridTemplateColumns: selected ? '1fr 1fr' : '1fr', gap: '16px' }}>
        {/* Leads List */}
        <div>
          {leads.length === 0 && <p style={{ color: '#94a3b8' }}>No leads yet!</p>}
          {leads.map(lead => (
            <div key={lead.id}
              onClick={() => setSelected(lead)}
              style={{
                background: selected?.id === lead.id ? '#1e3a5f' : '#1e293b',
                border: `1px solid ${selected?.id === lead.id ? '#6366f1' : '#334155'}`,
                borderRadius: '10px', padding: '16px', marginBottom: '10px',
                cursor: 'pointer'
              }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ color: '#f1f5f9', fontWeight: 'bold' }}>{lead.full_name}</div>
                  <div style={{ color: '#94a3b8', fontSize: '14px' }}>{lead.email}</div>
                  <div style={{ color: '#94a3b8', fontSize: '14px' }}>{lead.phone}</div>
                </div>
                <span style={{
                  background: STATUS_COLORS[lead.status] + '30',
                  color: STATUS_COLORS[lead.status],
                  padding: '4px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold'
                }}>
                  {lead.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lead Detail */}
        {selected && (
          <div style={{ background: '#1e293b', borderRadius: '12px', padding: '24px', height: 'fit-content' }}>
            <h3 style={{ color: '#f1f5f9', marginBottom: '16px' }}>Lead Details</h3>
            {[
              ['Full Name', selected.full_name],
              ['Email', selected.email],
              ['Phone', selected.phone],
              ['Website', selected.website_url || '-'],
              ['Company', selected.company_name || '-'],
              ['Company Email', selected.company_email || '-'],
              ['Source', selected.source],
              ['Date', selected.created_at],
            ].map(([label, value]) => (
              <div key={label} style={{ marginBottom: '12px' }}>
                <div style={{ color: '#94a3b8', fontSize: '12px' }}>{label}</div>
                <div style={{ color: '#f1f5f9' }}>{value}</div>
              </div>
            ))}

            <div style={{ marginTop: '20px' }}>
              <div style={{ color: '#94a3b8', fontSize: '12px', marginBottom: '8px' }}>Update Status</div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {['new', 'contacted', 'converted', 'rejected'].map(s => (
                  <button key={s} onClick={() => handleStatus(selected.id, s)}
                    style={{
                      background: selected.status === s ? STATUS_COLORS[s] : STATUS_COLORS[s] + '30',
                      color: selected.status === s ? 'white' : STATUS_COLORS[s],
                      border: 'none', padding: '6px 14px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold'
                    }}>
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <button onClick={() => handleDelete(selected.id)}
              style={{ marginTop: '16px', background: '#ef4444', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', width: '100%' }}>
              🗑 Delete Lead
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
import { useState, useEffect } from 'react';
import { getAllImages, uploadImage, deleteImage } from './adminApi';

const CATEGORIES = [
  'YouTube SEO & Promotion',
  'Facebook & Instagram Ads',
  'Google Ads',
  'TikTok Ads',
  'Facebook Marketing',
  'Social Media Management',
  'Amazon Book Promotion',
  'client metting',
  'Client Review',
];

export default function Portfolio() {
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');

  const load = () => getAllImages().then(res => setImages(res.data));

  useEffect(() => { load(); }, []);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;
    setLoading(true);
    setMsg('');
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('category', category);
      formData.append('title', title);
      await uploadImage(formData);
      setMsg('✅ Image uploaded!');
      setFile(null);
      setTitle('');
      load();
    } catch {
      setMsg('❌ Upload failed!');
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this image?')) return;
    await deleteImage(id);
    load();
  };

  return (
    <div>
      <h2 style={{ color: '#f1f5f9', marginBottom: '24px' }}>🖼️ Portfolio Images</h2>

      {/* Upload Form */}
      <div style={{ background: '#1e293b', borderRadius: '12px', padding: '24px', marginBottom: '24px' }}>
        <h3 style={{ color: '#f1f5f9', marginBottom: '16px' }}>Upload New Image</h3>
        {msg && <div style={{ color: msg.includes('✅') ? '#22c55e' : '#ef4444', marginBottom: '12px' }}>{msg}</div>}
        <form onSubmit={handleUpload}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div>
              <label style={{ color: '#94a3b8', display: 'block', marginBottom: '6px' }}>Category</label>
              <select value={category} onChange={e => setCategory(e.target.value)}
                style={{ width: '100%', padding: '10px', borderRadius: '8px', background: '#0f172a', border: '1px solid #334155', color: '#f1f5f9' }}>
                {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label style={{ color: '#94a3b8', display: 'block', marginBottom: '6px' }}>Title (optional)</label>
              <input type="text" value={title} onChange={e => setTitle(e.target.value)}
                placeholder="Image title..."
                style={{ width: '100%', padding: '10px', borderRadius: '8px', background: '#0f172a', border: '1px solid #334155', color: '#f1f5f9', boxSizing: 'border-box' }} />
            </div>
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ color: '#94a3b8', display: 'block', marginBottom: '6px' }}>Select Image</label>
            <input type="file" accept="image/*" onChange={e => setFile(e.target.files[0])}
              style={{ color: '#f1f5f9' }} />
          </div>
          <button type="submit" disabled={loading || !file}
            style={{ background: loading ? '#334155' : '#6366f1', color: 'white', border: 'none', padding: '10px 24px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
            {loading ? 'Uploading...' : 'Upload Image'}
          </button>
        </form>
      </div>

      {/* Images Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
        {images.map(img => (
          <div key={img.id} style={{ background: '#1e293b', borderRadius: '12px', overflow: 'hidden' }}>
            <img
              src={`http://127.0.0.1:8000/${img.filepath}`}
              alt={img.title}
              style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
            <div style={{ padding: '12px' }}>
              <div style={{ color: '#f1f5f9', fontSize: '14px', fontWeight: 'bold' }}>{img.title || 'No title'}</div>
              <div style={{ color: '#6366f1', fontSize: '12px', marginBottom: '8px' }}>{img.category}</div>
              <button onClick={() => handleDelete(img.id)}
                style={{ background: '#ef4444', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', width: '100%' }}>
                🗑 Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {images.length === 0 && (
        <p style={{ color: '#94a3b8' }}>No images uploaded yet!</p>
      )}
    </div>
  );
}
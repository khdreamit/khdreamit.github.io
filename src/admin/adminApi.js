import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000';

const getToken = () => localStorage.getItem('adminToken');

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth
export const loginAdmin = (username, password) =>
  api.post('/admin/login', { username, password });

export const getDashboard = () => api.get('/admin/dashboard');

// Portfolio
export const getAllImages = () => api.get('/portfolio/all');
export const uploadImage = (formData) =>
  api.post('/portfolio/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
export const deleteImage = (id) => api.delete(`/portfolio/${id}`);

// Leads
export const getAllLeads = () => api.get('/leads/all');
export const updateLeadStatus = (id, status) =>
  api.put(`/leads/${id}/status`, { status });
export const deleteLead = (id) => api.delete(`/leads/${id}`);

// Notifications
export const getNotifications = () => api.get('/notifications/all');
export const markAsRead = (id) => api.put(`/notifications/${id}/read`);
export const markAllRead = () => api.put('/notifications/read-all');
export const deleteNotification = (id) => api.delete(`/notifications/${id}`);
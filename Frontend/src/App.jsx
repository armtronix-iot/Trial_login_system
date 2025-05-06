// frontend/src/App.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

const API = import.meta.env.VITE_API_URL;

function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  const register = async () => {
    try {
      await axios.post(`${API}/register`, { username, password });
      alert('✅ Registered!');
    } catch (err) {
      alert('❌ Registration failed');
    }
  };

  const login = async () => {
    try {
      const res = await axios.post(`${API}/login`, { username, password });
      setToken(res.data.token);
      alert('✅ Login successful!');
      navigate('/dashboard'); // ← redirect here
    } catch (err) {
      alert('❌ Login failed');
    }
  };

  return (
    <div className="container">
      <h2>Login/Register</h2>
      <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={register}>Register</button>
      <button onClick={login}>Login</button>
    </div>
  );
}

function Dashboard() {
  return <h2>Welcome to the Dashboard 🎉</h2>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

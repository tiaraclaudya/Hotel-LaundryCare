import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage({ onLoginSuccess, kembaliKeWebsite }) {
    const router = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', {
        username,
        password
      });
      console.log(response)

      if (response.status === 200) {
        alert(response.data.message || '🎉 Login Berhasil!');
        localStorage.setItem("isAdminLoggedIn", true)
        router('/admin/dashboard')
        // onLoginSuccess(); // Pindah ke halaman dashboard
      }
    } catch (error) {
      const msg = error.response?.data?.message || 'Gagal login, periksa koneksi backend.';
      alert(`Gagal: ${msg}`);
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-100 flex flex-col justify-center items-center px-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-sm w-full border border-slate-200 relative">
        
        <div className="text-center mb-6">
          <span className="text-4xl">🔐</span>
          <h2 className="text-xl font-bold text-slate-800 mt-2">Login Admin</h2>
          <p className="text-slate-400 text-xs mt-1">Silakan masuk untuk mengelola orderan</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-slate-700 text-xs font-bold mb-1">Username</label>
            <input 
              type="text" 
              required 
              placeholder="Masukkan email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-sky-500 text-slate-800"
            />
          </div>

          <div>
            <label className="block text-slate-700 text-xs font-bold mb-1">Password</label>
            <input 
              type="password" 
              required 
              placeholder="masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-sky-500 text-slate-800"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2.5 rounded-xl text-sm shadow-md transition-all active:scale-95 cursor-pointer mt-2"
          >
            Masuk Ke Sistem
          </button>
        </form>

        <button 
          onClick={kembaliKeWebsite}
          className="w-full mt-4 text-center text-xs text-slate-500 hover:text-sky-600 font-semibold transition-all cursor-pointer"
        >
          ← Kembali ke Website Utama
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function DashboardPage() {
  const navigate = useNavigate();
  const [laundryOrders, setLaundryOrders] = useState([]);
  const [activeMenu, setActiveMenu] = useState('orders'); // State untuk navigasi menu jika nanti ditambah

  const fetchOrders = async () => {
    try {
      const response = await axios.get('https://backend-laundry-care-hotel.vercel.app/api/informasiPelanggan');
      if (response.data.success) {
        setLaundryOrders(response.data.data);
      }
    } catch (error) {
      console.error('Gagal mengambil data laundry:', error);
      alert('Gagal mengambil data dari database.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    alert('Anda telah berhasil keluar.');
    navigate('/login');
  };

  const handleNavigate = () => {
    navigate('/admin/feedbackpage');
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="w-full min-h-screen bg-slate-100 flex" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      
      {/* ================= SIDEBAR (SISI KIRI) ================= */}
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col justify-between min-h-screen shadow-xl fixed left-0 top-0 z-20">
        <div>
          {/* Header Sidebar / Logo Brand */}
          <div className="px-6 py-5 flex items-center gap-3 bg-slate-950 border-b border-slate-800">
            <span className="text-2xl">📊</span>
            <div>
              <h2 className="font-bold text-white text-sm tracking-wide leading-tight">LaundryCare</h2>
              <span className="text-[10px] text-sky-400 font-semibold uppercase">Admin Panel</span>
            </div>
          </div>

          {/* List Menu Navigasi */}
          <nav className="p-4 space-y-1.5">
            <p className="text-[10px] font-bold text-slate-500 uppercase px-3 mb-2 tracking-wider">Menu Utama</p>
            
            <button 
              onClick={() => setActiveMenu('orders')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all text-left ${
                activeMenu === 'orders' 
                  ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20' 
                  : 'hover:bg-slate-800 hover:text-slate-100'
              }`}
            >
              <span className="text-base">🧺</span>
              Daftar Orderan
            </button>

            {/* Kamu bisa menambah menu dummy lain di sini untuk pelengkap tampilan */}
            <button 
              onClick={handleNavigate}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:bg-slate-800 hover:text-slate-100 transition-all text-left"
            >
              <span className="text-base">📝</span>
              Feedback
            </button>
          </nav>
        </div>

        {/* Bagian Bawah Sidebar (Tombol Logout) */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/40">
          <button 
            onClick={handleLogout}
            className="w-full bg-rose-600 hover:bg-rose-700 text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-rose-600/10 cursor-pointer active:scale-95"
          >
            🚪 Logout
          </button>
        </div>
      </aside>

      {/* ================= KONTEN UTAMA (SISI KANAN) ================= */}
      {/* Diberi pl-64 agar konten bergeser ke kanan dan tidak tertutup sidebar yang posisinya fixed */}
      <main className="flex-1 pl-64 min-h-screen flex flex-col">
        
        {/* Top Navbar Ringkas */}
        <header className="w-full bg-white h-16 border-b border-slate-200 px-8 flex items-center justify-between sticky top-0 z-10 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="text-slate-400 text-xs">Lokasi Kerja:</span>
            <span className="text-xs font-bold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">Lobby Lantai 1</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-xs font-medium text-slate-600">Sistem Online</span>
          </div>
        </header>

        {/* Isi Tabel Data */}
        <div className="p-8 max-w-7xl w-full mx-auto flex-1">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Daftar Orderan Laundry</h1>
              <p className="text-slate-500 text-xs mt-0.5">Data rincian informasi pelanggan laundry yang masuk dari website utama.</p>
            </div>
            <button 
              onClick={fetchOrders}
              className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-xl text-xs font-semibold shadow-sm transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
            >
              🔄 Refresh Data
            </button>
          </div>

          {/* TABEL DATA */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto max-w-full">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider">
                    <th className="p-4 w-12 text-center">No</th>
                    <th className="p-4">Nama Lengkap</th>
                    <th className="p-4">Layanan</th>
                    <th className="p-4">No. Kamar</th>
                    <th className="p-4">No. Telepon</th>
                    <th className="p-4">Antar Kamar?</th>
                    <th className="p-4 text-center">Rincian Pakaian (Pcs)</th>
                    <th className="p-4">Total Harga</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                  {laundryOrders.length === 0 ? (
                    <tr>
                      <td colSpan="8" className="p-12 text-center text-slate-400 font-normal">Belum ada data orderan laundry di database.</td>
                    </tr>
                  ) : (
                    laundryOrders.map((order, index) => (
                      <tr key={order.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-4 text-center text-slate-400">{index + 1}</td>
                        <td className="p-4 font-bold text-slate-900">{order.namaLengkap}</td>
                        <td className="p-4">
                          <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase ${
                            order.jenisLayanan === 'cuci_lipat' ? 'bg-blue-50 text-blue-600 border border-blue-200' :
                            order.jenisLayanan === 'cuci_kering' ? 'bg-amber-50 text-amber-600 border border-amber-200' :
                            'bg-purple-50 text-purple-600 border border-purple-200'
                          }`}>
                            {order.jenisLayanan?.replace('_', ' ')}
                          </span>
                        </td>
                        <td className="p-4 font-semibold text-slate-600">{order.noKamar}</td>
                        <td className="p-4 text-slate-500">{order.noTelepon}</td>
                        <td className="p-4">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${order.antarKeKamar ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                            {order.antarKeKamar ? 'Yes (Diantar)' : 'No (Ambil Sendiri)'}
                          </span>
                        </td>
                        <td className="p-4 bg-slate-50/50">
                          <div className="grid grid-cols-3 gap-x-4 gap-y-1 text-[11px] font-normal text-slate-500">
                            {order.sprei > 0 && <span>Sprei: <b>{order.sprei}</b></span>}
                            {order.bajuKaos > 0 && <span>Kaos: <b>{order.bajuKaos}</b></span>}
                            {order.celana > 0 && <span>Celana: <b>{order.celana}</b></span>}
                            {order.handuk > 0 && <span>Handuk: <b>{order.handuk}</b></span>}
                            {order.sarungBantal > 0 && <span>S.Bantal: <b>{order.sarungBantal}</b></span>}
                            {order.sarungGuling > 0 && <span>S.Guling: <b>{order.sarungGuling}</b></span>}
                            {order.gaunDress > 0 && <span>Dress: <b>{order.gaunDress}</b></span>}
                            {order.blazer > 0 && <span>Blazer: <b>{order.blazer}</b></span>}
                            {order.jas > 0 && <span>Jas: <b>{order.jas}</b></span>}
                            {order.kemejaWol > 0 && <span>K.Wol: <b>{order.kemejaWol}</b></span>}
                            {order.sweaterWol > 0 && <span>S.Wol: <b>{order.sweaterWol}</b></span>}
                            {order.sutraSilk > 0 && <span>Sutra: <b>{order.sutraSilk}</b></span>}
                          </div>
                        </td>
                        <td className="p-4 font-bold text-sky-600 text-sm">Rp {order.totalHarga?.toLocaleString('id-ID')}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DashboardPage;
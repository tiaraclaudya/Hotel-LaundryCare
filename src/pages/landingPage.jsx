import React, { useEffect, useState } from 'react';
import axios from 'axios'; // 🚀 AXIOS TERPASANG SEMPURNA
import { images } from '../assets';

function LandingPage() {
  // ==========================================
  // 📋 MEMORI / STATE FORM POPUP TIARA (ORDER)
  // ==========================================
  const [showForm, setShowForm] = useState(false);
  const [namaTamu, setNamaTamu] = useState('');
  const [nomorKamar, setNomorKamar] = useState('');

  const [showDetailForm, setShowDetailForm] = useState(false);
  const [detailInput, setDetailInput] = useState({
    jenis_layanan: 'cuci_lipat',
    nama_lengkap: '',
    no_telepon: '',
    no_kamar: '',
    antar_ke_kamar: 'Yes', // Selector baru Tiara
    sprei: 0,
    baju_kaos: 0,
    celana: 0,
    handuk: 0,
    sarung_bantal: 0,
    sarung_guling: 0,
    gaun_dress: 0,
    blazer: 0,
    jas: 0,
    kemeja_wol: 0,
    sweater_wol: 0,
    sutra_silk: 0,
    total_harga: 0
  });

  // ==========================================
  // 📋 MEMORI / STATE FORM KONTAK TENTANG KAMI
  // ==========================================
  const [kontakInput, setKontakInput] = useState({
    nama_lengkap: '',
    email: '',
    pesan: ''
  });

  // Efek animasi scroll fade-up
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { 
        if (e.isIntersecting) e.target.classList.add('visible'); 
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
  }, []);

  return (
    <div className="w-full" style={{ background: 'rgb(248, 250, 252)', fontFamily: "'DM Sans', sans-serif" }}>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg className="w-8 h-8 text-sky-600 spin-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 6a6 6 0 0 1 6 6"></path>
              <circle cx="12" cy="12" r="2"></circle>
            </svg>
            <span className="canva-text font-heading text-xl font-bold text-slate-800" style={{ color: 'rgb(30, 58, 95)', fontWeight: 700, fontSize: '16px' }}>LaundryCare Hotel</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }} href="#services" className="text-slate-600 hover:text-sky-600 transition-colors font-medium">Layanan</a> 
            <a onClick={(e) => { e.preventDefault(); document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }); }} href="#how-it-works" className="text-slate-600 hover:text-sky-600 transition-colors font-medium">Sistem</a> 
            <a onClick={(e) => { e.preventDefault(); document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }); }} href="#pricing" className="text-slate-600 hover:text-sky-600 transition-colors font-medium">Harga</a> 
            <a onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} href="#contact" className="text-slate-600 hover:text-sky-600 transition-colors font-medium">Kontak</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative w-full" style={{ minHeight: '100vh' }}>
        <div className="absolute inset-0 overflow-hidden">
          <img className="canva-image carousel-img" loading="lazy" src="https://images.pexels.com/photos/6466219/pexels-photo-6466219.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1920" alt="Housekeeper towels" /> 
          <img className="canva-image carousel-img" loading="lazy" src="https://images.pexels.com/photos/3755590/pexels-photo-3755590.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1920" alt="White bed linen" /> 
          <img className="canva-image carousel-img" loading="lazy" src="https://images.pexels.com/photos/28576617/pexels-photo-28576617.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1920" alt="Folded clothes" />
        </div>
        <div className="hero-overlay absolute inset-0"></div>
        <div className="bubbles-container">
          <div className="bubble-dot w-4 h-4 bubble-anim" style={{ top: '20%', left: '10%', animationDelay: '0s' }}></div>
          <div className="bubble-dot w-6 h-6 bubble-anim" style={{ top: '40%', left: '80%', animationDelay: '0.5s' }}></div>
          <div className="bubble-dot w-3 h-3 bubble-anim" style={{ top: '70%', left: '25%', animationDelay: '1s' }}></div>
          <div className="bubble-dot w-5 h-5 bubble-anim" style={{ top: '30%', left: '60%', animationDelay: '1.5s' }}></div>
          <div className="bubble-dot w-4 h-4 bubble-anim" style={{ top: '60%', left: '90%', animationDelay: '2s' }}></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6" style={{ minHeight: '100vh' }}>
          <div className="bounce-gentle mb-6">
            <svg className="w-16 h-16 text-sky-400" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5">
              <rect x="8" y="16" width="48" height="40" rx="4"></rect> 
              <circle cx="32" cy="38" r="12"></circle> 
              <circle cx="32" cy="38" r="4"></circle> 
              <path d="M32 26a12 12 0 0 1 12 12"></path> 
              <rect x="12" y="8" width="40" height="8" rx="2"></rect>
            </svg>
          </div>
          <h1 className="canva-text font-heading text-white mb-4" style={{ color: 'rgb(255, 255, 255)', fontWeight: 400, fontSize: '44px' }}>Layanan LaundryCarepuf</h1>
          <p className="canva-text text-sky-100 max-w-2xl mb-8" style={{ color: 'rgb(224, 242, 254)', fontWeight: 400, fontSize: '18px' }}>Pakaian bersih, wangi, dan rapi — siap diantar kembali ke kamar Anda dalam waktu singkat. Nikmati kenyamanan tanpa batas</p>
          <a onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }} href="#services" className="canva-button inline-block shadow-cyan-500/50 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:shadow-cyan-500/50 transition-all hover:scale-105" style={{ background: 'rgb(14, 165, 233)', color: 'white', fontWeight: 600, fontSize: '16px' }}>Lihat Layanan Kami</a>
        </div>
      </header>

      <main>
        {/* Services */}
        <section id="services" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 fade-up">
              <h2 className="canva-text font-heading mb-4" style={{ color: 'rgb(15, 23, 42)', fontWeight: 700, fontSize: '24px' }}>Layanan Kami</h2>
              <p className="canva-text max-w-2xl mx-auto" style={{ color: 'rgb(100, 116, 139)', fontSize: '16px' }}>Kami menyediakan layanan laundry profesional dengan standar kebersihan hotel bintang lima</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="service-card bg-white rounded-2xl overflow-hidden shadow-md shadow-blue-500/50 hover:shadow-blue-500/50 hover:shadow-2xl p-6">
                <div className='flex justify-center'> 
                  <img src={images.gambar2} alt="" style={{ width: '250px' }} />
                </div>
                <h3 className="canva-text font-heading font-semibold mb-2 text-slate-800 text-lg">Cuci &amp; Lipat</h3>
                <p className="text-sm text-slate-500">Pencucian menyeluruh dengan deterjen premium dan pelembut berkualitas tinggi.</p>
              </div>
              <div className="service-card bg-white rounded-2xl overflow-hidden shadow-md shadow-blue-500/50 hover:shadow-blue-500/50 hover:shadow-2xl p-6">
                <div className='flex justify-center'>
                  <img src={images.gambar1} alt="" style={{ width: '250px' }} />
                </div>
                <h3 className="canva-text font-heading font-semibold mb-2 text-slate-800 text-lg">Setrika &amp; Press</h3>
                <p className="text-sm text-slate-500">Setrika uap profesional untuk hasil licin sempurna pada pakaian formal Anda.</p>
              </div>
              <div className="service-card bg-white rounded-2xl overflow-hidden shadow-md shadow-blue-500/50 hover:shadow-blue-500/50 hover:shadow-2xl p-6">
                <div className='flex justify-center'>
                  <img src={images.gambar3} alt="" style={{ width: '250px' }} />
                </div>
                <h3 className="canva-text font-heading font-semibold mb-2 text-slate-800 text-lg">Dry Cleaning</h3>
                <p className="text-sm text-slate-500">Perawatan khusus kain sensitif seperti sutra, wol, jas, dan kasmir.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works / Sistem nya */}
        <section id="how-it-works" className="py-20 px-6 bg-sky-50 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="canva-text font-heading mb-4 text-slate-800 font-bold" style={{ fontSize: '24px' }}>Sistem nya</h2>
              <p className="canva-text text-slate-500 text-base">Dua pilihan mudah untuk laundry tanpa repot selama menginap.</p>
            </div>
            
            <div className="grid md:grid-cols-1 gap-6 max-w-lg mx-auto">
              {/* Kotak Hubungi Admin */}
              <div className="text-center bg-white p-6 rounded-2xl shadow-md border border-slate-100 relative z-20">
                <div className="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center bounce-gentle">
                  <span style={{ fontSize: '24px' }}>📞</span>
                </div>
                <h4 className="canva-text font-semibold mb-1 text-slate-800 text-base">1. Hubungi Admin</h4>
                <p className="canva-text text-slate-500 text-sm">Hubungi nomor yang dibawah</p>
                <button type="button" onClick={() => setShowDetailForm(true)} className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-md transition-all cursor-pointer relative z-30">Isi Form Detail</button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 fade-up">
              <h2 className="canva-text font-heading mb-4" style={{ color: 'rgb(15, 23, 42)', fontWeight: 700, fontSize: '24px' }}>Daftar Harga</h2>
              <p className="canva-text" style={{ color: 'rgb(100, 116, 139)', fontSize: '16px' }}>Harga terjangkau dengan kualitas premium untuk kenyamanan tamu</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="canva-card rounded-2xl p-8 text-center fade-up shadow-md" style={{ background: 'rgb(255, 255, 255)' }}>
                <h3 className="canva-text font-heading font-semibold mb-2" style={{ color: 'rgb(15, 23, 42)', fontWeight: 600, fontSize: '19px' }}>Cuci &amp; Lipat</h3>
                <p className="canva-text font-bold mb-4" style={{ color: 'rgb(14, 165, 233)', fontWeight: 700, fontSize: '28px' }}>Rp 30.000/8kg</p>
                <p className="canva-text text-sm" style={{ color: 'rgb(100, 116, 139)', fontSize: '16px' }}>Min. 2 kg • Selesai 6 jam</p>
              </div>
              <div className="canva-card rounded-2xl p-8 text-center fade-up shadow-lg scale-105 border-2 border-sky-400" style={{ background: 'rgb(255, 255, 255)' }}>
                <span className="inline-block bg-sky-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">POPULER</span>
                <h3 className="canva-text font-heading font-semibold mb-2" style={{ color: 'rgb(15, 23, 42)', fontWeight: 600, fontSize: '19px' }}>Cuci &amp; Kering</h3>
                <p className="canva-text font-bold mb-4" style={{ color: 'rgb(14, 165, 233)', fontWeight: 700, fontSize: '28px' }}>Rp 28.000/8kg</p>
                <p className="canva-text text-sm" style={{ color: 'rgb(100, 116, 139)', fontSize: '16px' }}>Per item • Selesai 4 jam </p>
              </div>
              <div className="canva-card rounded-2xl p-8 text-center fade-up shadow-md" style={{ background: 'rgb(255, 255, 255)' }}>
                <h3 className="canva-text font-heading font-semibold mb-2" style={{ color: 'rgb(15, 23, 42)', fontWeight: 600, fontSize: '19px' }}>Dry Cleaning</h3>
                <p className="canva-text font-bold mb-4" style={{ color: 'rgb(14, 165, 233)', fontWeight: 700, fontSize: '28px' }}>Rp 35.000/pcs</p>
                <p className="canva-text text-sm" style={{ color: 'rgb(100, 116, 139)', fontSize: '16px' }}>Bahan premium • Selesai 24 jam</p>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            🛠️ SECTION TENTANG KAMI + FORM INPUT DATABASE
           ========================================== */}
        <section id="contact" className="canva-section py-20 px-6" style={{ background: 'rgb(15, 23, 42)' }}>
          <div className="max-w-6xl mx-auto fade-up">
            <div className="text-center mb-12">
              <h2 className="canva-text font-heading mb-4" style={{ color: 'rgb(255, 255, 255)', fontWeight: 700, fontSize: '26px' }}>Tentang Kami &amp; Kontak</h2>
              <p className="canva-text max-w-xl mx-auto" style={{ color: 'rgb(148, 163, 184)', fontSize: '15px' }}>Tim housekeeping kami siap membantu kebutuhan laundry Anda kapan saja,Kirimkan pesan atau masukan Anda di bawah ini</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start text-left">
              
              {/* KOLOM KIRI: INFO HOTEL */}
              <div className="space-y-8 bg-slate-800/40 p-8 rounded-2xl border border-slate-700/50">
                <h3 className="text-white font-semibold text-lg border-b border-slate-700 pb-3">Informasi Layanan</h3>
                <div className="flex items-start gap-4">
                  <span className="text-2xl bg-slate-700/50 p-2 rounded-xl">📞</span>
                  <div>
                    <p className="text-xs text-slate-400 font-medium uppercase">Nomor Telepon</p>
                    <p className="canva-text font-semibold text-base text-slate-200 mt-0.5">+62 895 - 3244 - 06675</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl bg-slate-700/50 p-2 rounded-xl">⏰</span>
                  <div>
                    <p className="text-xs text-slate-400 font-medium uppercase">Jam Operasional</p>
                    <p className="canva-text font-semibold text-base text-slate-200 mt-0.5">06:00 - 22:00 WIB</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl bg-slate-700/50 p-2 rounded-xl">📍</span>
                  <div>
                    <p className="text-xs text-slate-400 font-medium uppercase">Lokasi Penyerahan</p>
                    <p className="canva-text font-semibold text-base text-slate-200 mt-0.5">Lobby Lantai 1</p>
                  </div>
                </div>
              </div>

              {/* KOLOM KANAN: FORM INPUT MASUK DATABASE KONTAK */}
              <div className="bg-white p-8 rounded-2xl shadow-xl space-y-4">
                <h3 className="text-slate-800 font-bold text-lg mb-2">Kirim Pesan Ke Kami</h3>
                
                <form 
                  onSubmit={async (e) => {
                    e.preventDefault();
                    try {
                      const response = await axios.post('https://backend-laundry-care-hotel.vercel.app/api/kontak/create', {
                        nama_lengkap: kontakInput.nama_lengkap,
                        email: kontakInput.email,
                        pesan: kontakInput.pesan
                      });

                      if (response.data.success) {
                        alert(`🎉 BERHASIL! Pesan dari ${kontakInput.nama_lengkap} masuk ke database kontak.`);
                        // Reset form kotak jadi bersih kembali
                        setKontakInput({ nama_lengkap: '', email: '', pesan: '' });
                      }
                    } catch (error) {
                      console.error('Gagal kirim pesan kontak:', error);
                      const msg = error.response?.data?.message || 'Koneksi backend bermasalah.';
                      alert(`Waduh gagal kirim: ${msg}`);
                    }
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-slate-700 text-xs font-bold mb-1">Nama Lengkap</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Masukkan nama lengkap Anda" 
                      value={kontakInput.nama_lengkap} 
                      onChange={(e) => setKontakInput({...kontakInput, nama_lengkap: e.target.value})} 
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-sky-500 text-slate-800 transition-colors" 
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 text-xs font-bold mb-1">Alamat Email</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="nama@email.com" 
                      value={kontakInput.email} 
                      onChange={(e) => setKontakInput({...kontakInput, email: e.target.value})} 
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-sky-500 text-slate-800 transition-colors" 
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 text-xs font-bold mb-1">Pesan / Masukan</label>
                    <textarea 
                      required 
                      rows="4"
                      placeholder="Tuliskan pesan atau ulasan Anda tentang pelayanan kami di sini..." 
                      value={kontakInput.pesan} 
                      onChange={(e) => setKontakInput({...kontakInput, pesan: e.target.value})} 
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-sky-500 text-slate-800 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 rounded-xl text-sm shadow-md transition-all active:scale-95 cursor-pointer"
                  >
                    🚀 Kirim Pesan Sekarang
                  </button>
                </form>

              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="canva-footer py-8 px-6 text-center" style={{ background: 'rgb(2, 6, 23)' }}>
        <p className="canva-text text-sm" style={{ color: 'rgb(100, 116, 139)', fontSize: '16px' }}>© 2026 LaundryCare Hotel</p>
      </footer>

      {/* ==========================================
          📋 POPUP FORM: HUBUNGI ADMIN (DETAIL LENGKAP)
         ========================================== */}
      {showDetailForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative my-8 text-left">
            <button type="button" onClick={() => setShowDetailForm(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 font-bold text-lg">✕</button>
            <h3 className="font-heading text-xl font-bold text-slate-800 text-center mb-1">Formulir Detail Laundry</h3>
            <p className="text-slate-500 text-xs text-center mb-4">Silakan isi rincian kuantitas pakaian Anda.</p>
            
            <form 
              onSubmit={async (e) => {
                e.preventDefault();
                try {
                  const response = await axios.post('https://backend-laundry-care-hotel.vercel.app/api/informasiPelanggan', {
                    jenis_layanan: detailInput.jenis_layanan,
                    nama_lengkap: detailInput.nama_lengkap,
                    no_telepon: detailInput.no_telepon,
                    no_kamar: detailInput.no_kamar,
                    antar_ke_kamar: detailInput.antar_ke_kamar, 
                    sprei: detailInput.sprei,
                    baju_kaos: detailInput.baju_kaos,
                    celana: detailInput.celana,
                    handuk: detailInput.handuk,
                    sarung_bantal: detailInput.sarung_bantal,
                    sarung_guling: detailInput.sarung_guling,
                    gaun_dress: detailInput.gaun_dress,
                    blazer: detailInput.blazer,
                    jas: detailInput.jas,
                    kemeja_wol: detailInput.kemeja_wol,
                    sweater_wol: detailInput.sweater_wol,
                    sutra_silk: detailInput.sutra_silk,
                    total_harga: detailInput.total_harga
                  });

                  if (response.data.success) {
                    alert(`🎉 HOREE! Order Laundry ${detailInput.nama_lengkap} Berhasil Masuk Database via Axios!`);
                    setShowDetailForm(false);
                    setDetailInput({
                      jenis_layanan: 'cuci_lipat', nama_lengkap: '', no_telepon: '', no_kamar: '', antar_ke_kamar: 'Yes',
                      sprei: 0, baju_kaos: 0, celana: 0, handuk: 0, sarung_bantal: 0, sarung_guling: 0,
                      gaun_dress: 0, blazer: 0, jas: 0, kemeja_wol: 0, sweater_wol: 0, sutra_silk: 0, total_harga: 0
                    });
                  }
                } catch (error) {
                  console.error('Error post data pakai Axios:', error);
                  const errorMsg = error.response?.data?.message || 'Gagal terhubung ke server backend.';
                  alert(`Waduh eror: ${errorMsg}`);
                }
              }} 
              className="space-y-4 max-h-[65vh] overflow-y-auto px-1"
            >
              
              <div className="bg-sky-50 p-4 rounded-xl space-y-3">
                <p className="text-xs font-bold text-sky-700 uppercase">Data Tamu</p>
                <div>
                  <label className="block text-slate-700 text-xs font-semibold mb-1">Jenis Layanan</label>
                  <select value={detailInput.jenis_layanan} onChange={(e) => setDetailInput({...detailInput, jenis_layanan: e.target.value})} className="w-full px-3 py-2 bg-white border rounded-lg text-sm focus:outline-none">
                    <option value="cuci_lipat">Cuci &amp; Lipat</option>
                    <option value="cuci_kering">Cuci &amp; Kering</option>
                    <option value="dry_cleaning">Dry Cleaning</option>
                  </select>
                </div>

                <div>
                  <label className="block text-emerald-700 text-xs font-bold mb-1">Apakah Diantar Ke Kamar?</label>
                  <select value={detailInput.antar_ke_kamar} onChange={(e) => setDetailInput({...detailInput, antar_ke_kamar: e.target.value})} className="w-full px-3 py-2 bg-white border-2 border-emerald-300 rounded-lg text-sm focus:outline-none font-semibold text-slate-800">
                    <option value="Yes">Yes (Ya, antarkan langsung)</option>
                    <option value="No">No (Saya ambil sendiri)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 text-xs font-semibold mb-1">Nama Lengkap</label>
                  <input type="text" required placeholder="Nama lengkap" value={detailInput.nama_lengkap} onChange={(e) => setDetailInput({...detailInput, nama_lengkap: e.target.value})} className="w-full px-3 py-2 bg-white border rounded-lg text-sm focus:outline-none" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-700 text-xs font-semibold mb-1">No. Telepon</label>
                    <input type="text" required placeholder="08xxx" value={detailInput.no_telepon} onChange={(e) => setDetailInput({...detailInput, no_telepon: e.target.value})} className="w-full px-3 py-2 bg-white border rounded-lg text-sm focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-slate-700 text-xs font-semibold mb-1">No. Kamar</label>
                    <input type="text" required placeholder="Room xxx" value={detailInput.no_kamar} onChange={(e) => setDetailInput({...detailInput, no_kamar: e.target.value})} className="w-full px-3 py-2 bg-white border rounded-lg text-sm focus:outline-none" />
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl">
                <p className="text-xs font-bold text-slate-600 uppercase mb-3">Jumlah Item Pakaian (Pcs)</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {[
                    { id: 'sprei', label: 'Sprei' }, { id: 'baju_kaos', label: 'Baju Kaos' },
                    { id: 'celana', label: 'Celana' }, { id: 'handuk', label: 'Handuk' },
                    { id: 'sarung_bantal', label: 'Sarung Bantal' }, { id: 'sarung_guling', label: 'Sarung Guling' },
                    { id: 'gaun_dress', label: 'Gaun Dress' }, { id: 'blazer', label: 'Blazer' },
                    { id: 'jas', label: 'Jas' }, { id: 'kemeja_wol', label: 'Kemeja Wol' },
                    { id: 'sweater_wol', label: 'Sweater Wol' }, { id: 'sutra_silk', label: 'Sutra Silk' }
                  ].map((item) => (
                    <div key={item.id} className="flex items-center justify-between bg-white p-2 rounded-lg border">
                      <span className="text-xs text-slate-700">{item.label}</span>
                      <input type="number" min="0" value={detailInput[item.id]} onChange={(e) => setDetailInput({...detailInput, [item.id]: parseInt(e.target.value) || 0})} className="w-12 text-center bg-slate-50 border rounded p-1 text-xs focus:outline-none" />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-slate-700 text-xs font-semibold mb-1">Estimasi Total Harga (Rp)</label>
                <input type="number" min="0" placeholder="Total harga" value={detailInput.total_harga} onChange={(e) => setDetailInput({...detailInput, total_harga: parseInt(e.target.value) || 0})} className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none font-bold text-sky-600" />
              </div>

              <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 rounded-xl text-sm shadow-md">Simpan &amp; Hubungi Admin</button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

export default LandingPage;
import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  // Cek apakah admin sudah login berdasarkan data di localStorage
  const isAuthenticated = localStorage.getItem('isAdminLoggedIn') === 'true';

  if (!isAuthenticated) {
    // Jika belum login, paksa pindah ke halaman login
    return <Navigate to="/" replace />;
  }

  // Jika sudah login, izinkan mengakses halaman dashboard
  return children;
}

export default ProtectedRoute;
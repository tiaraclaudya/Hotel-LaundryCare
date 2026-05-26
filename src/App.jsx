import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import LandingPage from './pages/landingPage';
import LoginPage from './pages/login';
import DashboardPage from './pages/admin/dashboard'
import FeedbackPage from './pages/admin/feedback';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Bungkus rute dashboard dengan ProtectedRoute */}
        <Route 
          path="/admin/dashboard" 
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin/feedbackpage" 
          element={
            <ProtectedRoute>
              <FeedbackPage />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
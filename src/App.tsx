import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ClientLogin from './pages/ClientLogin';
import InstallerLogin from './pages/InstallerLogin';
import ClientDashboard from './pages/ClientDashboard';
import InstallerDashboard from './pages/InstallerDashboard';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/client-login" element={<ClientLogin />} />
            <Route path="/installer-login" element={<InstallerLogin />} />
            <Route path="/client-dashboard" element={<ClientDashboard />} />
            <Route path="/installer-dashboard" element={<InstallerDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
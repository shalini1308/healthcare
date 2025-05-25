import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Appointments from './pages/Appointments';

function App() {
  return (
    <Router>
      <div className="p-4">
        <nav className="mb-4 space-x-4">
          <Link to="/" className="text-blue-500">Login</Link>
          <Link to="/register" className="text-blue-500">Register</Link>
          <Link to="/dashboard" className="text-blue-500">Dashboard</Link>
          <Link to="/appointments" className="text-blue-500">Appointments</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/appointments" element={<Appointments />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

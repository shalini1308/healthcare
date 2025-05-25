import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';   // <-- Make sure Signup is imported
import Dashboard from './pages/Dashboard';
import Appointments from './pages/Appointments';
import DoctorPortal from './pages/DoctorPortal';
import PatientPortal from './pages/PatientPortal';
import AdminPortal from './pages/AdminPortal';
import Portals from './pages/Portals';
import DoctorLogin from './pages/DoctorLogin';
import DoctorSignup from './pages/DoctorSignup';
import PatientLogin from './pages/PatientLogin';
import PatientSignup from './pages/PatientSignup';
import AdminLogin from './pages/AdminLogin';
import AdminSignup from './pages/AdminSignup';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />   {/* <-- This was missing before */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/doctorportal" element={<DoctorPortal />} />
            <Route path="/patientportal" element={<PatientPortal />} />
            <Route path="/adminportal" element={<AdminPortal />} />
            <Route path="/portals" element={<Portals />} />
            <Route path="/doctor-login" element={<DoctorLogin />} />
            <Route path="/doctor-signup" element={<DoctorSignup />} />
            <Route path="/patient-login" element={<PatientLogin />} />
            <Route path="/patient-signup" element={<PatientSignup />} />     
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin-signup" element={<AdminSignup />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

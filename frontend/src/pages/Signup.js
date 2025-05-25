import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [role, setRole] = useState(''); 
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
  };

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/api/users/register', { ...formData, role }); 
      alert('Signup successful! Please login.');
      navigate('/login');
    } catch (error) {
      console.error('Signup error:', error);
      alert('Signup failed. Try again!');
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Select Your Role 🎯</h2>

      {/* Role Selection Buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px', gap: '20px' }}>
        <button onClick={() => handleRoleSelect('doctor')} style={roleButtonStyle}>Doctor</button>
        <button onClick={() => handleRoleSelect('patient')} style={roleButtonStyle}>Patient</button>
        <button onClick={() => handleRoleSelect('admin')} style={roleButtonStyle}>Admin</button>
      </div>

      {/* Show Form only if role is selected */}
      {role && (
        <form onSubmit={handleSubmit}>
          <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Signup as {role.toUpperCase()}</h3>
          <input 
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input 
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input 
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <button type="submit" style={submitButtonStyle}>Signup</button>
        </form>
      )}
    </div>
  );
}

const roleButtonStyle = {
  padding: '10px 20px',
  backgroundColor: '#3498db',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  margin: '10px 0',
  borderRadius: '5px',
  border: '1px solid #ccc'
};

const submitButtonStyle = {
  width: '100%',
  padding: '12px',
  backgroundColor: '#2ecc71',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginTop: '10px'
};

export default Signup;

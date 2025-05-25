import { Link } from 'react-router-dom';

function Login() {
  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '30px' }}>Login Portal</h2>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '40px' }}>
        <Link to="/doctorportal" style={portalStyle}>Doctor Portal</Link>
        <Link to="/patientportal" style={portalStyle}>Patient Portal</Link>
        <Link to="/adminportal" style={portalStyle}>Admin Portal</Link>
      </div>
    </div>
  );
}

const portalStyle = {
  padding: '20px 30px',
  backgroundColor: '#2ecc71',
  color: 'white',
  borderRadius: '10px',
  textDecoration: 'none',
  fontSize: '18px',
  fontWeight: 'bold'
};

export default Login;

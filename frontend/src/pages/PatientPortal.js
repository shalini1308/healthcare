import { useNavigate } from 'react-router-dom';

function PatientPortal() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#3498db', marginBottom: '20px' }}>
        PATIENT PORTAL 🧑‍⚕️
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#555' }}>
        Book appointments, view your health records, and manage profiles.
      </p>

      <img 
        src="/docpat.jpg" 
        alt="Patient Portal" 
        style={{ width: '300px', borderRadius: '10px', marginTop: '30px' }}
      />

      <div style={{ marginTop: '30px' }}>
        <button onClick={() => navigate('/patient-login')} style={styles.button}>LOGIN</button>
      </div>
    </div>
  );
}

const styles = {
  button: {
    padding: '10px 20px',
    backgroundColor: '#2ecc71',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '10px'
  }
};

export default PatientPortal;

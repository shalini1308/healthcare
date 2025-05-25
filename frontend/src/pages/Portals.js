import { useNavigate } from 'react-router-dom';

function Portals() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#3498db', marginBottom: '30px' }}>
        PORTALS
      </h1>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
        {/* Doctor Portal */}
        <div style={styles.portalBox}>
          <img src="/sethescope.jpg" alt="Doctor Portal" style={styles.image} />
          <h2 style={styles.title}>Doctor Portal</h2>
          <button style={styles.button} onClick={() => navigate('/doctorportal')}>
            Go to Doctor Portal
          </button>
        </div>

        {/* Patient Portal */}
        <div style={styles.portalBox}>
          <img src="/docpat.jpg" alt="Patient Portal" style={styles.image} />
          <h2 style={styles.title}>Patient Portal</h2>
          <button style={styles.button} onClick={() => navigate('/patientportal')}>
            Go to Patient Portal
          </button>
        </div>

        {/* Admin Portal */}
        <div style={styles.portalBox}>
          <img src="/adminimage.jpg" alt="Admin Portal" style={styles.image} />
          <h2 style={styles.title}>Admin Portal</h2>
          <button style={styles.button} onClick={() => navigate('/adminportal')}>
            Go to Admin Portal
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  portalBox: {
    width: '250px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
    textAlign: 'center'
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '10px'
  },
  title: {
    fontSize: '1.3rem',
    marginBottom: '10px',
    color: '#2c3e50'
  },
  button: {
    padding: '8px 15px',
    backgroundColor: '#2ecc71',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default Portals;

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>🏥 HOSPITAL</h1>
      <div style={styles.links}>
        <a href="/" style={styles.link}>HOME</a>
        <a href="/#contacts" style={styles.link}>CONTACT</a> 
        <a href="/#address" style={styles.link}>ADDRESS</a> 
        <Link to="/appointments" style={styles.link}>APPOINTMENTS</Link>
        <Link to="/dashboard" style={styles.link}>DASHBOARD</Link>
        <Link to="/portals" style={styles.link}>PORTALS</Link>
        <Link to="/signup" style={styles.link}>SIGNUP</Link>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#3498db',
    padding: '10px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    color: 'white',
    fontSize: '24px'
  },
  links: {
    display: 'flex',
    gap: '20px'
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'bold'
  }
};

export default Navbar;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DoctorLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Doctor Logged in!');
    navigate('/dashboard'); // You can change it later
  };

  return (
    <div style={styles.container}>
      <h2>Doctor Login 👨‍⚕️</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
}

const styles = {
  container: { maxWidth: '400px', margin: '50px auto', textAlign: 'center' },
  form: { display: 'flex', flexDirection: 'column', gap: '10px' },
  input: { padding: '10px', borderRadius: '5px', border: '1px solid #ccc' },
  button: { padding: '10px', backgroundColor: '#3498db', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }
};

export default DoctorLogin;

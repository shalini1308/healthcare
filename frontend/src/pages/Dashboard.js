import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

function Dashboard() {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const username = localStorage.getItem('username');

  useEffect(() => {
    fetchAppointments();
  }, [location]);  // Important: triggers fetch whenever route changes

  const fetchAppointments = async () => {
    try {
      const username = localStorage.getItem('username');
      const response = await axios.get('http://localhost:3001/api/appointments');
      const userAppointments = response.data.filter(
        (appointment) => appointment.patientName === username
      );
      setAppointments(userAppointments);
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  const handleBookAppointment = () => {
    navigate('/appointments');
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/appointments/${id}`);
      fetchAppointments(); // Refetch immediately after deleting
      alert('Appointment deleted successfully.');
    } catch (error) {
      console.error('Error deleting appointment:', error);
      alert('Failed to delete appointment.');
    }
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '40px auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>
        Welcome {username} 📋
      </h2>
      <div style={{ textAlign: 'right', marginBottom: '20px' }}>
        <button
          onClick={handleBookAppointment}
          style={{
            padding: '10px 20px',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Book New Appointment
        </button>
      </div>
      {appointments.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No appointments yet.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#2ecc71', color: 'white' }}>
              <th style={styles.th}>Doctor</th>
              <th style={styles.th}>Patient</th>
              <th style={styles.th}>Date</th>
              <th style={styles.th}>Time</th>
              <th style={styles.th}>Reason</th>
              <th style={styles.th}>Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment._id} style={{ backgroundColor: '#f2f2f2', textAlign: 'center' }}>
                <td style={styles.td}>{appointment.doctorName}</td>
                <td style={styles.td}>{appointment.patientName}</td>
                <td style={styles.td}>{appointment.date}</td>
                <td style={styles.td}>{appointment.time}</td>
                <td style={styles.td}>{appointment.reason}</td>
                <td style={styles.td}>
                  <button
                    onClick={() => handleDelete(appointment._id)}
                    style={{
                      backgroundColor: 'red',
                      color: 'white',
                      border: 'none',
                      padding: '5px 10px',
                      borderRadius: '5px',
                      cursor: 'pointer'
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const styles = {
  th: { padding: '12px', border: '1px solid #ddd' },
  td: { padding: '10px', border: '1px solid #ddd' }
};

export default Dashboard;

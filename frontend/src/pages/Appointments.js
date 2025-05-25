import { useState } from 'react';
import { createAppointment } from '../services/appointmentService';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Appointments() {
  const [formData, setFormData] = useState({
    doctorName: '',
    patientName: '',
    email: '',       // <-- added
    date: '',
    time: '',
    reason: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const today = new Date();
    const enteredDate = new Date(formData.date);
    const thirtyDaysFromToday = new Date();
    thirtyDaysFromToday.setDate(today.getDate() + 30);

    if (enteredDate < new Date(today.setHours(0, 0, 0, 0))) {
      toast.error('Cannot book appointment for a past date.');
      return;
    }
    if (enteredDate > thirtyDaysFromToday) {
      toast.error('Appointments can only be booked up to 30 days from today.');
      return;
    }

    let [hour, minute] = formData.time.split(':').map(Number);
    if (hour < 9 || hour > 17 || (hour === 17 && minute > 0)) {
      toast.error('Appointments must be between 9:00 AM and 5:00 PM.');
      return;
    }

    try {
      const response = await createAppointment(formData);
      console.log('Appointment saved:', response);
      toast.success('Appointment booked successfully!');
      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);

      setFormData({ doctorName: '', patientName: '', email: '', date: '', time: '', reason: '' });
    } catch (error) {
      if (error.response && error.response.data.error) {
        toast.error(error.response.data.error);
      } else {
        toast.error('Failed to book appointment.');
      }
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Book an Appointment 🏥</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="doctorName"
          placeholder="Doctor Name"
          value={formData.doctorName}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="text"
          name="patientName"
          placeholder="Patient Name"
          value={formData.patientName}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email ID"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          style={styles.input}
          min={new Date().toISOString().split('T')[0]}
          max={new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <p style={{ fontSize: '12px', color: '#888', marginTop: '-8px', marginBottom: '15px' }}>
          (Appointments only between 9:00 AM to 5:00 PM)
        </p>
        <textarea
          name="reason"
          placeholder="Reason for visit"
          value={formData.reason}
          onChange={handleChange}
          required
          style={styles.textarea}
        />
        <button type="submit" style={styles.button}>Book Appointment</button>
        <ToastContainer />
      </form>
    </div>
  );
}

const styles = {
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc'
  },
  textarea: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
    minHeight: '100px'
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px'
  }
};

export default Appointments;

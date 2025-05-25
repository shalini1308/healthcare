import axios from 'axios';

const API_URL = 'http://localhost:3001/api/appointments'; // Update later if needed

export const createAppointment = async (appointmentData) => {
  try {
    const response = await axios.post(API_URL, appointmentData);
    return response.data;
  } catch (error) {
    console.error('Error creating appointment:', error);
    throw error;
  }
};

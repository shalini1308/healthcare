
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const doctorRoutes = require('./routes/doctorroutes');
const patientRoutes = require('./routes/patientroutes');
const appointmentRoutes = require('./routes/appointmentroutes');
const userRoutes = require('./routes/userroutes'); // added

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/healthcare', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

app.use('/api/doctors', doctorRoutes);
app.use('/api/patients', patientRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/users', userRoutes); // added

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

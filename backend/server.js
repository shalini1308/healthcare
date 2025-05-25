const express = require('express');
const app = express();
const PORT = 3000;

const doctorRoutes = require('./routes/doctorroutes'); // <-- Import doctor routes

// Middleware to parse JSON
app.use(express.json());

// Route usage
app.use('/api/doctors', doctorRoutes); // <-- Mount routes here

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Healthcare System API');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

function Home() {
  return (
    <div style={{ padding: '40px', textAlign: 'center', backgroundColor: '#eaf6fb', minHeight: '100vh' }}>
      
      {/* Welcome Section */}
      <h1 style={{ fontSize: '2.8rem', color: '#3498db', marginBottom: '20px' }}>
        WELCOME TO HOSPITAL MANAGEMENT 🏥
      </h1>
      
      <img 
  src="/doctorimage.png" 
  alt="Doctor" 
  style={{ width: '300px', borderRadius: '10px', marginBottom: '30px' }}
/>



      <p style={{ fontSize: '1.3rem', color: '#555', marginBottom: '40px' }}>
        Your Health is Our Top Priority. ✨
      </p>

      {/* Services Section */}
      <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#2ecc71' }}>OUR SERVICES</h2>
      <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.1rem', color: '#555', marginBottom: '50px' }}>
        <li>✔️ Easy Online Appointment Booking</li>
        <li>✔️ Expert Doctor Consultation</li>
        <li>✔️ 24/7 Emergency Care Support</li>
        <li>✔️ Regular Health Checkups & Reports</li>
        <li>✔️ Secure Medical Records Management</li>
      </ul>

      {/* Contacts Section */}
      <div id="contacts" style={{ marginTop: '60px' }}>
        <h2 style={{ color: '#2980b9' }}>📞 CONTACT US</h2>
        <p style={{ fontSize: '1.1rem' }}>Phone: +91 98765 43210</p>
        <p style={{ fontSize: '1.1rem' }}>Email: support@hospitalmanagement.com</p>
      </div>

      {/* Address Section */}
      <div id="address" style={{ marginTop: '60px' }}>
        <h2 style={{ color: '#2980b9' }}>🏥 OUR ADDRESS</h2>
        <p style={{ fontSize: '1.1rem' }}>123 Health Avenue, Chennai, Tamil Nadu, India</p>
      </div>

      {/* Facilities Section */}
      <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#2ecc71' }}>OUR FACILITIES</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <img src="/emergency.jpeg" alt="Emergency Services" style={imageStyle} />
        <img src="/bed.jpeg" alt="Hospital Bed" style={imageStyle} />
        <img src="/ecg.jpeg" alt="ECG Monitoring" style={imageStyle} />
        <img src="/surgery.jpeg" alt="Surgery Room" style={imageStyle} />
      </div>

    </div>
  );
}

const imageStyle = {
  width: '250px',
  height: '180px',
  objectFit: 'cover',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
};

export default Home;

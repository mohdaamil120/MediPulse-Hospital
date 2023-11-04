import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const doctorImage = `https://th.bing.com/th/id/OIP.VdTPZWqYwmowm-jZ6KR1KwHaE8?w=305&h=204&c=7&r=0&o=5&pid=1.7`

function AdminDashboard() {
  // Dummy data for charts
  const patientData = [12, 15, 22, 18, 25];
  const appointmentData = [8, 10, 15, 12, 20];

  const patientChartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const appointmentChartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="dashboard" >
      <header style={{borderRadius:"10px"}} className="bg-dark text-white p-3 text-center">
        <h1>Hospital Admin Dashboard</h1>
      </header>

      <Container className="mt-4">
        <Row>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Patients</Card.Title>
                <Bar data={{
                  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
                  datasets: [{
                    label: 'Patients',
                    data: patientData,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                  }],
                }} options={patientChartOptions} />
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Appointments</Card.Title>
                <Bar data={{
                  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
                  datasets: [{
                    label: 'Appointments',
                    data: appointmentData,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                  }],
                }} options={appointmentChartOptions} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={5}>
            <Card>
              <Card.Body>
                <h3>Doctor Information</h3>
                <img src={doctorImage} alt="Doctor" className="doctor-image" style={{width:"80%" ,margin:"auto", borderRadius:"5px", height:"192px"}}/>
                <p>
                  Dr. John Doe
                  <br />
                  Specialization: Cardiologist
                  <br />
                  Experience: 10 years
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <h3>Hospital Information</h3>
                <div className="scrollable">
                  <p>
                    Hospital Name: ABC Medical Center
                    <br />
                    Location: New York, NY
                    <br />
                    Contact: (123) 456-7890
                  </p>
                  {/* Add more content here */}
                  Lorem ipsum dolor sit, amet consectetur fgf ff gdg adipisicing elit. Maiores voluptate nobis temporibus accusamus totam, inventore quis error ut, necessitatibus voluptatem nostrum dolor tempore itaque molestias eveniet accusantium? Optio, nisi asperiores. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, aperiam suscipit architecto reiciendis amet odit, magnam dolorum quos fuga non fugit placeat voluptates culpa dolor, natus beatae tempora nemo? Possimu.
                </div>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={6}>
            <Card>
              <Card.Body>
                <h3>Hospital Information</h3>
                <div className="scrollable">
                  <p>
                    Hospital Name: ABC Medical Center
                    <br />
                    Location: New York, NY
                    <br />
                    Contact: (123) 456-7890
                  </p>
                  {/* Add more content here */}
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores voluptate nobis temporibus accusamus totam, inventore quis error ut, necessitatibus voluptatem nostrum dolor tempore itaque molestias eveniet accusantium? Optio, nisi asperiores. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, aperiam suscipit architecto reiciendis amet odit, magnam dolorum quos fuga non fugit placeat voluptates culpa dolor, natus beatae tempora nemo? Possimus.
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5}>
            <Card>
              <Card.Body>
                <h3>Doctor Information</h3>
                <img src={doctorImage} alt="Doctor" className="doctor-image" style={{width:"80%" ,margin:"auto", borderRadius:"5px"}}/>
                <p>
                  Dr. John Doe
                  <br />
                  Specialization: Cardiologist
                  <br />
                  Experience: 10 years
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdminDashboard;







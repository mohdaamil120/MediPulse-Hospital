// Import the necessary modules
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getList } from '../Redux/doctorReducer/action';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PaymentPage from './PaymentPage';

const Singlecard = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [currdoctor, setCurrDoctor] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [patientName, setPatientName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [showPayment, setShowPayment] = useState(false); // New state to control the display of the payment page
  const navi = useNavigate();

  const { doctor } = useSelector((store) => {
    return {
      doctor: store.doctorReducer.Doctor,
    };
  });

  useEffect(() => {
    if (doctor.length === 0) {
      dispatch(getList());
    }
  }, [doctor.length, dispatch]);

  useEffect(() => {
    if (id) {
      const currDoctor = doctor.find((item) => item.id === Number(id));
      currDoctor && setCurrDoctor(currDoctor);
    }
  }, [id, doctor]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!selectedDate || !selectedTime || !patientName || !contactNumber) {
      alert('Please fill in all the details before proceeding to payment.');
      return;
    }

    // Create a summary of the appointment
   const appointmentSummary = {
      doctorName: currdoctor.name,
      date: selectedDate.toDateString(),
      time: selectedTime,
      patientName,
      contactNumber,
    };
    console.log(appointmentSummary);
    // Redirect to the payment page with appointment summary
    navi('/paymentpage', { appointmentSummary });
  };

  // const handleSubmit = () => {
  //   // Check if all necessary details are filled before showing the payment page
  //   if (selectedDate && selectedTime && patientName && contactNumber) {
  //     setShowPayment(true);
  //   } else {
  //     alert('Please fill in all the details before proceeding to payment.');
  //   }
  // };

  // const handlePaymentSuccess = () => {
  //   // Handle any post-payment logic here
  //   console.log('Payment successful! Redirecting to success page...');
  //   navi('/payment-success'); // Redirect to a success page or any other route as needed
  // };
 


  return (
    <BookingPage>
      <TopSection>
        <div className="photo">
          <img src={currdoctor.image} alt="Doctor" />
        </div>
        <div className="detail">
          <h3>{currdoctor.name}</h3>
          <p>
            {currdoctor.education} (experience: {currdoctor.experience} years)
          </p>
          <h4>SPECIALIST</h4>
          <p>{currdoctor.speciality} </p>
          <h4>LOCATION</h4>
          <p>{currdoctor.location}</p>
          <p>number: {currdoctor.mobile} </p>
          <p>Fees: Rs. {currdoctor.fees} </p>
        </div>
      </TopSection>
      <AppointmentForm>
        <FormField>
          <label>Select Date</label>
          <DatePicker selected={selectedDate} onChange={handleDateChange} />
        </FormField>
        <FormField>
          <label>Select Time</label>
          <select value={selectedTime} onChange={handleTimeChange}>
            <option value="">Select Time</option>
            <option value="09:00 AM">09:00 AM</option>
            <option value="10:00 AM">10:00 AM</option>
            {/* Add more time options as needed */}
          </select>
        </FormField>
        <FormField>
          <label>Patient Name</label>
          <input
            type="text"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
          />
        </FormField>
        <FormField>
          <label>Contact Number</label>
          <input
            type="number"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
        </FormField>
        <SummarySection>
          <h3>Appointment Summary</h3>
          <p>
            <strong>Doctor:</strong> {currdoctor.name}
          </p>
          <p>
            <strong>Date:</strong> {selectedDate.toDateString()}
          </p>
          <p>
            <strong>Time:</strong> {selectedTime}
          </p>
          <p>
            <strong>Patient Name:</strong> {patientName}
          </p>
          <p>
            <strong>Contact Number:</strong> {contactNumber}
          </p>
        </SummarySection>

        {/* {!showPayment ? ( */}
          <BookButton onClick={handleSubmit}>Proceed to Payment</BookButton>
        {/* ) : (
          <PaymentPage
            appointmentSummary={{
              doctorName: currdoctor.name,
              date: selectedDate.toDateString(),
              time: selectedTime,
              patientName,
              contactNumber,
            }}
            onSuccess={handlePaymentSuccess}
          />
        )} */}
      </AppointmentForm>
    </BookingPage>
  );
};


// Styled-components for the updated code
const BookingPage = styled.div`
  width: 80%;
  margin: 2% auto;
  font-family: 'Arial', sans-serif;
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;

  .photo img {
    border-radius: 50%;
    width: 120px;
    height: 120px;
    object-fit: cover;
    margin-right: 20px;
  }

  .detail {
    flex-grow: 1;

    h3 {
      color: #145723;
      margin-bottom: 8px;
    }

    p {
      margin-bottom: 4px;
      color: #666;
    }
  }
`;

const AppointmentForm = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const FormField = styled.div`
  margin-bottom: 20px;

  label {
    margin-bottom: 8px;
    font-weight: bold;
    color: #145723;
  }

  input,
  select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

const SummarySection = styled.div`
  margin-top: 20px;
  border-top: 1px solid #ddd;
  padding-top: 20px;

  h3 {
    color: #145723;
    margin-bottom: 8px;
  }

  p {
    margin-bottom: 4px;
    color: #666;
  }
`;

const BookButton = styled.button`
  color: white;
  padding: 10px;
  background-color: #4dca6a;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45b860;
  }
`;

export default Singlecard;

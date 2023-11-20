// PaymentForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expDate, setExpDate] = useState('');
  const [cvc, setCvc] = useState('')
  const navigate = useNavigate()
  
  const handlePayment = () => {
    // Display a success message
    alert('Payment successful!');

    // Set a timeout to redirect to the homepage after 2 seconds
    setTimeout(() => {
      // Use navigate to redirect to the homepage
      navigate('/');
    },1000);
  };

  return (
    <div style={{width:"80%", margin:"auto", border:"0.5px solid #4dca6a", padding:"20px" }}>
      <h2>Payment Form</h2>
      <div style={{margin:"10px"}}>
        <label>Card Number:</label>
        <input
          type="text"
          minLength={16}
          maxLength={16}
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
      </div>
      <div style={{margin:"10px"}}>
        <label>Expiration Date (DD/MM/YY):</label>
        <input
          type='date'
          value={expDate}
          onChange={(e) => setExpDate(e.target.value)}
        />
      </div>
      <div style={{margin:"10px"}}>
        <label>CVC:</label>
        <input type="text" maxLength={3} minLength={3} value={cvc} onChange={(e) => setCvc(e.target.value)} />
      </div>
      <BookButton onClick={handlePayment} style={{margin:"10px"}}>Pay Now</BookButton>
    </div>
  );
};

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


export default PaymentForm;


// import React from 'react'
// import StripeCheckout from 'react-stripe-checkout';

// export const PaymentForm = () => {

//     const onToken = (token) => {
//         console.log(token);
//     }

//     return (
//         <div>
//             <h2>Payment</h2>
//             <StripeCheckout
//                 token={onToken}
//                 name="Printed T-Shirt"
//                 description='US Polo - Medium'
//                 image="https://placehold.jp/150x150.png"
//                 currency="INR"
//                 amount="120000"
//                 panelLabel='Make Payment'
//                 stripeKey="pk_test_51NwN46SGSe6lG6bP83Rmf9aDMMwLbBRj4acZBi8TEAmneEox9pW5vKXTUMMY8y6X9uo6DKasYylIv4v6s9QD2K8l00kalH5AX2"
//             />
//         </div>
//     )
// }

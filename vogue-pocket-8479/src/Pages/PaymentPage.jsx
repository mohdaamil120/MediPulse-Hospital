import React, { useState } from 'react';
import styled from 'styled-components';


const PaymentPage = () => {
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    cardName: '',
    expirationDate: '',
    cvv: '',
    isPaymentSuccessful: false,
  });

  const handleInputChange = (e) => {
    setPaymentData({
      ...paymentData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a payment request (you'd use a payment gateway API in a real application)
    // In this example, we'll just set isPaymentSuccessful to true
    setPaymentData({ ...paymentData, isPaymentSuccessful: true });
  };

  return paymentData.isPaymentSuccessful ? (
    <DIV>
      <div className='main'>
      <h1>Payment Successful!</h1>
      </div>
    
    </DIV>
  ) : (
    <DIV>
      <div className='main'>
      <h1>Payment Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Card Number:</label>
          <input
            type="text"
            name="cardNumber"
            value={paymentData.cardNumber}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Cardholder Name:</label>
          <input
            type="text"
            name="cardName"
            value={paymentData.cardName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Expiration Date:</label>
          <input
            type="text"
            name="expirationDate"
            value={paymentData.expirationDate}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>CVV:</label>
          <input
            type="text"
            name="cvv"
            value={paymentData.cvv}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit Payment</button>
      </form>
      </div>
    
    </DIV>
  );
};

const DIV= styled.div`
margin: auto;
height: 100%;
  background-image: url("https://t4.ftcdn.net/jpg/06/30/07/51/240_F_630075147_hFX9sPPOcr5OmRfSsrho5dwzYcUCnmyf.jpg"); /* Set the background image */
  background-size: cover; 
  background-repeat: no-repeat;

.main{
   display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
 /* Don't repeat the image */
  border: 1px solid #ccc;
  border-radius: 5px;
  max-width: 400px;
  margin:5% auto;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; 
  backdrop-filter: blur(5px); /* Adjust the blur value as needed */
  -webkit-backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.5);

    @media (max-width: 767px) {
    max-width: 70%;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 50%;
  }

  @media (min-width: 1024px) {
    max-width: 30%;
  }
}

  form{
    display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;

  @media (min-width: 768px) {
    flex-direction: column;
    flex-wrap: wrap;
  }

  }

  input{
    padding: 10px;
  margin: 5px ;
  border: 2px solid white;
  border-radius: 5px;
  outline: none;
  width: auto;
  background-color: transparent;

  @media (min-width: 768px) {
    width: calc(50% - 10px);
    margin: 5px;
  }
  }

  button{
    padding: 10px;
  margin: 10px 0;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
  }
`
export default PaymentPage;

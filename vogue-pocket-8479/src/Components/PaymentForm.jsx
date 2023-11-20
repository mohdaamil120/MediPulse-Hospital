// PaymentForm.js
import React, { useState } from 'react';

const PaymentForm = ({ onSubmit }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expDate, setExpDate] = useState('');
  const [cvc, setCvc] = useState('');

  const handlePayment = async () => {
    // // Initialize Stripe with your publishable key
    // const stripe = Stripe('your-publishable-stripe-key');

    // // Create a token with the card information
    // const { token, error } = await stripe.createToken({
    //   card: {
    //     number: cardNumber,
    //     exp_month: expDate.split('/')[0],
    //     exp_year: expDate.split('/')[1],
    //     cvc,
    //   },
    // });

    // if (error) {
    //   console.error(error);
    // } else {
    //   // Pass the token to the onSubmit function in the parent component
    //   onSubmit(token.id);
    // }
  };

  return (
    <div>
      <h2>Payment Form</h2>
      <div>
        <label>Card Number:</label>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
      </div>
      <div>
        <label>Expiration Date (MM/YY):</label>
        <input
          type="text"
          value={expDate}
          onChange={(e) => setExpDate(e.target.value)}
        />
      </div>
      <div>
        <label>CVC:</label>
        <input type="text" value={cvc} onChange={(e) => setCvc(e.target.value)} />
      </div>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default PaymentForm;

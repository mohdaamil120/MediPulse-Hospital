// // PaymentForm.js
// import React, { useState } from 'react';

// const PaymentForm = () => {
//   const [cardNumber, setCardNumber] = useState('');
//   const [expDate, setExpDate] = useState('');
//   const [cvc, setCvc] = useState('')

//   return (
//     <div>
//       <h2>Payment Form</h2>
//       <div>
//         <label>Card Number:</label>
//         <input
//           type="text"
//           value={cardNumber}
//           onChange={(e) => setCardNumber(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Expiration Date (MM/YY):</label>
//         <input
//           type="text"
//           value={expDate}
//           onChange={(e) => setExpDate(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>CVC:</label>
//         <input type="text" value={cvc} onChange={(e) => setCvc(e.target.value)} />
//       </div>
//       <button onClick={handlePayment}>Pay Now</button>
//     </div>
//   );
// };

// export default PaymentForm;


import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

export const PaymentForm = () => {

    const onToken = (token) => {
        console.log(token);
    }

    return (
        <div>
            <h2>Payment</h2>
            <StripeCheckout
                token={onToken}
                name="Printed T-Shirt"
                description='US Polo - Medium'
                image="https://placehold.jp/150x150.png"
                currency="INR"
                amount="120000"
                panelLabel='Make Payment'
                stripeKey="pk_test_51NwN46SGSe6lG6bP83Rmf9aDMMwLbBRj4acZBi8TEAmneEox9pW5vKXTUMMY8y6X9uo6DKasYylIv4v6s9QD2K8l00kalH5AX2"
            />
        </div>
    )
}

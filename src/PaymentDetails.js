import React, { useState } from "react";
import PropTypes from 'prop-types';
import './PaymentDetails.css'; // Import the CSS file

function PaymentForm({ onPaymentSubmit }) {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate form fields before submission (optional)

    const paymentDetails = {
      name,
      cardNumber,
      expiryDate,
      cvv,
    };

    alert("Payment submitted successfully!"); // Display alert message
    setOrderConfirmed(true); // Set order confirmation flag

    // Clear form fields after successful submission (optional)
    setName("");
    setCardNumber("");
    setExpiryDate("");
    setCvv("");
  };

  return (
    <div className="payment-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        <label htmlFor="cardNumber">Card Number:</label>
        <input type="text" id="cardNumber" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
        <label htmlFor="expiryDate">Expiry Date:</label>
        <input type="text" id="expiryDate" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} placeholder="MM/YY" required />
        <label htmlFor="cvv">CVV:</label>
        <input type="text" id="cvv" value={cvv} onChange={(e) => setCvv(e.target.value)} required />
        <button type="submit">Submit</button>
      </form>

      {orderConfirmed && (
        <div className="order-confirmed">
          <h2>Order Confirmed</h2>
          <p>Thank you, {name}, for your order!</p>
        </div>
      )}
    </div>
  );
}

PaymentForm.propTypes = {
  onPaymentSubmit: PropTypes.func.isRequired,
};

export default PaymentForm;
import React, { useState } from 'react';
import './Otp.css'; // Custom CSS for styling

const Otp = () => {
  const [otp, setOtp] = useState(''); // State to store the OTP input
  const [isOtpValid, setIsOtpValid] = useState(false); // State to track OTP validation
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // State to show the success message

  const handleOtpChange = (e) => {
    setOtp(e.target.value); // Update the OTP as the user types
  };

  const handleOtpSubmit = () => {
    // Simple validation for OTP (assuming 6 digits)
    if (otp.length === 6) {
      setIsOtpValid(true);
      setShowSuccessMessage(true); // Show success message if OTP is valid
    } else {
      alert('Please enter a valid 6-digit OTP.');
    }
  };

  const handlePayment = () => {
    if (isOtpValid) {
      alert('Payment Successful!'); // Placeholder for actual payment process
    } else {
      alert('Please enter a valid OTP before proceeding to payment.');
    }
  };

  return (
    <div className="otp-container">
      <div className="otp-content">
        {/* Train Logo */}
        <div className="logo-container">
          <img 
            src="src/assets/train2.png" 
            className="App-logo" 
            alt="Train logo" 
          />
        </div>

        {/* OTP Input Form */}
        <div className="otp-form">
          <h1>OTP Verification</h1>
          <div className="form-group">
            <label htmlFor="otp-input"><strong style={{marginLeft:"16px"}}>Enter OTP:</strong></label>
            <input
              id="otp-input"
              type="text"
              value={otp}
              onChange={handleOtpChange}
              placeholder="Enter your 6-digit OTP"
              className="otp-input"
            />
          </div>
          <button className="ok-button" onClick={handleOtpSubmit}>Payment Button</button>
        </div>
      </div>

      {showSuccessMessage && <p className="success-message">OTP Verified Successfully!</p>}

      {/* Payment Button */}
      {/* <button 
        className="payment-button" 
        onClick={handlePayment}
        disabled={!isOtpValid} // Disable payment button until OTP is validated
      >
        Proceed to Payment
      </button> */}
    </div>
  );
};

export default Otp;

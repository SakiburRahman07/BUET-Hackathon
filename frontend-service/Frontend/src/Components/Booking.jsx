import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Booking.css'; // Import the CSS file for styling

const Booking = () => {
  const [ticketCount, setTicketCount] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [availableSeats, setAvailableSeats] = useState(null); // State to store available seats
  const [error, setError] = useState(''); // State to store any fetch error
  const location = useLocation();
  const navigate = useNavigate();

  // Get trainId and date from the passed state
  const { trainId, date } = location.state || {};

  // Log the values to ensure they are received correctly
  useEffect(() => {
    console.log('Train ID:', trainId, 'Date:', date);
  }, [trainId, date]);

  useEffect(() => {
    if (trainId && date) {
      console.log(`Fetching available seats for trainId: ${trainId}, date: ${date}`);
      
      fetch(`http://localhost:8082/availableseat?trainId=${trainId}&date=${date}`, {
        method: 'GET', // Use GET method to fetch available seats
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch available seats');
          }
          return response.json();
        })
        .then((data) => {
          setAvailableSeats(data);
        })
        .catch((error) => {
          setError('Failed to load available seats. Please try again later.');
        });
    }
  }, [trainId, date]);

  const handleTicketChange = (e) => {
    setTicketCount(e.target.value);
  };

  const handleSubmit = () => {
    if (ticketCount > 0 && ticketCount <= availableSeats) {
      setIsSubmitted(true);
      navigate('/otp'); // Navigate to OTP page
    } else {
      alert(`Please enter a valid number of tickets (1-${availableSeats})`);
    }
  };

  return (
    <div className="kapataksha-container">
      <img src="src/assets/train2.png" className="App-logo" alt="Train logo" style={{ width: '100px', height: 'auto' }} />
      <h1>Kapataksha Express - Book Your Tickets</h1>

      {/* <div className="seat-section">
        <h2>Booked Seats: 5</h2>
      </div>

      <div className="seat-section">
        {error ? (
          <h2 style={{ color: 'red' }}>{error}</h2>
        ) : (
          <h2>Available Seats: {availableSeats !== null ? availableSeats : 'Loading...'}</h2>
        )}
      </div> */}

      <div className="ticket-form">
        <label htmlFor="ticket-input"><strong>Number of Tickets:</strong></label>
        <input
          id="ticket-input"
          type="number"
          min="1"
          max={availableSeats}
          value={ticketCount}
          onChange={handleTicketChange}
          placeholder="Enter number of tickets"
        />
        <button className="submit-button" onClick={handleSubmit}>Submit</button>

        {isSubmitted && <p className="confirmation-message">You have booked {ticketCount} ticket(s)!</p>}
      </div>
    </div>
  );
};

export default Booking;

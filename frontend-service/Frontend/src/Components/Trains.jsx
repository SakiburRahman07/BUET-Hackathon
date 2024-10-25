import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Trains.css'; // Import the CSS file for styling

const Trains = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get the train data and form data from the Homepage form submission
  const trainData = location.state?.trainData || [];
  const formData = location.state?.formData || {};

  // Print trainId and date to console
  console.log('Form Data:', formData);
  console.log('Train ID:', formData.trainId);
  console.log('Date:', formData.date);
  const formattedDate = formData.date; 

  const handleSeeSeats = (train) => {
    // Assuming train.date is a valid date string in YYYY-MM-DD format
// No need to format if it's already in the correct format
    navigate('/booking', { state: { trainId: train.id, date: formattedDate } });
  };
  
  return (
    <div className="trains-container">
      <h1>Available Trains</h1>

      <div className="trains-content">
        {/* Add the large train image here */}
        <div className="large-train-image">
          <img 
            src="src/assets/train2.png" // Use the path to your larger train image
            className="big-train" 
            alt="Large Train" 
          />
        </div>

        {trainData.length === 0 ? (
          <p>No trains available for the selected route and date.</p>
        ) : (
          <ul className="trains-list">
            {trainData.map(train => (
              <li key={train.id} className="train-item">
                <img 
                  src="src/assets/train2.png" 
                  className="train-logo" 
                  alt="Train logo" 
                />
                <div className="train-details">
                  <strong>{train.trainName}</strong> {/* Display the train name */}
                  <img 
                    src="src/assets/RailLine.png" 
                    className="line-image" 
                    alt="Rail Line" 
                  />
                  <button onClick={() => handleSeeSeats(train)}>Checkout seats</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Trains;

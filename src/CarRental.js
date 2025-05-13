import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CarRental.css';

function CarRental() {
  const navigate = useNavigate();

  const handleRentClick = () => {
    navigate('/payment'); // Redirecting to the payment path
  };

  return (
    <div className="car-rental-container">
      <header className="car-rental-header">
      </header>

      <section className="hero-section">
        <div className="car-image-container">
          <Link to="/ford-everest" className="arrow left-arrow">
            &lt;
          </Link>
          <img src="/range-rover.png" alt="Range Rover" className="car-image" />
          <Link to="/nissan-terra" className="arrow right-arrow">
            &gt;
          </Link>
        </div>

        <div className="car-details">
          <h1 className="car-model">LANDROVER</h1>
          <div className="features">
            <div className="feature-row">
              <div className="feature-item">
                <img src="/automatic.png" alt="Automatic" className="feature-icon" />
                <span>Automatic</span>
              </div>
              <div className="feature-item">
                <img src="/people.png" alt="People" className="feature-icon" />
                <span>5 People</span>
              </div>
              <div className="feature-item">
                <img src="/bags.png" alt="Bags" className="feature-icon" />
                <span>3 Bags</span>
              </div>
            </div>
          </div>
          <div className="vehicle-features-divider"></div>
          <div className="vehicle-features">
            <h2>Vehicle Features:</h2>
            <ul>
              <li>AM/FM Stereo Radio</li>
              <li>Cruise Control</li>
              <li>All-Wheel Drive</li>
              <li>Touchscreen Navigation</li>
              <li>Leather Seats</li>
            </ul>
          </div>
          <p className="price">₱4,000 per day</p>
        </div>
      </section>

      <section className="booking-section">
        <div className="location">
          <img src="/location.png" alt="Location" className="location-icon" /> Location <br /> Tagum
        </div>
        <div className="divider"></div>
        <div className="date">
          <img src="/date.png" alt="Date" className="date-icon" /> Arrival <br /> 3/31/25
        </div>
        <div className="divider"></div>
        <div className="date">
          <img src="/date.png" alt="Date" className="date-icon" /> Departure <br /> 4/3/25
        </div>
        <button className="rent-button" onClick={handleRentClick}>
          Rent
        </button>
      </section>
    </div>
  );
}

export default CarRental;
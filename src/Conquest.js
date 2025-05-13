import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CarRental.css';

function Conquest() {
  const navigate = useNavigate();

  const handleRentClick = () => {
    navigate('/payment'); // Redirecting to the payment path
  };

  return (
    <div className="car-rental-container">
      <header className="car-rental-header"></header>

      <section className="hero-section">
        <div className="car-image-container">
          <Link to="/strada" className="arrow left-arrow">&lt;</Link>
          <img src="/ToyotaConquest.png" alt="Toyota Conquest" className="car-image" />
          <Link to="/hilux" className="arrow right-arrow">&gt;</Link>
        </div>

        <div className="car-details">
          <h1 className="car-model">TOYOTA CONQUEST</h1>
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
                <span>8 Bags</span>
              </div>
            </div>
          </div>
          <div className="vehicle-features-divider"></div>
          <div className="vehicle-features">
            <h2>Vehicle Features:</h2>
            <ul>
              <li>Powerful & Reliable Engine</li>
              <li>Tough & Aggressive Design</li>
              <li>4x4 Off-Road Capability</li>
              <li>Advanced Safety Features</li>
              <li>Comfortable & Spacious Interior</li>
              <li>Durable & High Payload Capacity</li>
            </ul>
          </div>
          <p className="price">₱4,500 per day</p>
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
        <button className="rent-button" onClick={handleRentClick}>Rent</button>
      </section>
    </div>
  );
}

export default Conquest;
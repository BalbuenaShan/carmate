import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CarRental.css';

function Alphard() {
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
          <Link to="/staria" className="arrow left-arrow">
            &lt;
          </Link>
          <img src="/toyotaalphard.png" alt="Toyota Alphard" className="car-image" />
          <Link to="/hiace" className="arrow right-arrow">
            &gt;
          </Link>
        </div>

        <div className="car-details">
          <h1 className="car-model">TOYOTA ALPHARD</h1>
          <div className="features">
            <div className="feature-row">
              <div className="feature-item">
                <img src="/automatic.png" alt="Automatic" className="feature-icon" />
                <span>Automatic</span>
              </div>
              <div className="feature-item">
                <img src="/people.png" alt="People" className="feature-icon" />
                <span>7 People</span>
              </div>
              <div className="feature-item">
                <img src="/bags.png" alt="Bags" className="feature-icon" />
                <span>5 Bags</span>
              </div>
            </div>
          </div>
          <div className="vehicle-features-divider"></div>
          <div className="vehicle-features">
            <h2>Vehicle Features:</h2>
            <ul>
              <li>Luxury Interior</li>
              <li>Powerful & Smooth Performance</li>
              <li>Advanced Safety Features</li>
              <li>Smart Infotainment System</li>
              <li>Power Sliding Doors & Hands-Free Tailgate</li>
              <li>Tri-Zone Climate Control</li>
            </ul>
          </div>
          <p className="price">₱5,500 per day</p>
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

export default Alphard;
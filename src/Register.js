import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Simulate successful registration (replace with actual logic)
    console.log('Registration successful!');
    navigate('/browse');
  };

  return (
    <div className="register-container">
      <img src="/carmatelogo.png" alt="Carmate Logo" className="register-logo" />

      <main className="register-main">
        <section className="register-hero">
          <div className="register-hero-content">
            <img src="/car1.png" alt="Car" className="register-hero-image" />
            <div className="register-hero-text">
              <h1>RENT A CAR WITH US</h1>
              <p>
                Renting a car with us ensures you have access to a wide range of vehicles tailored to your preferences. With straightforward online booking, affordable rates, 24/7 customer support, and convenient pick-up locations, your travel experience is both easy and enjoyable.
              </p>
            </div>
          </div>
        </section>

        <section className="register-form-section">
          <div className="register-form-container">
            <img src="/carmatelogo.png" alt="Carmate Logo" className="register-form-logo" />
            <form className="register-form" onSubmit={handleSubmit}>
              <div className="register-form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className="register-form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
              </div>
              <div className="register-form-group">
                <label htmlFor="firstName">First name</label>
                <input type="text" id="firstName" name="firstName" />
              </div>
              <div className="register-form-group">
                <label htmlFor="lastName">Last name</label>
                <input type="text" id="lastName" name="lastName" />
              </div>
              <div className="register-form-group">
                <label htmlFor="contactNumber">Contact number</label>
                <input type="tel" id="contactNumber" name="contactNumber" />
              </div>
              <div className="register-form-group">
                <label htmlFor="driversLicense">Driver's license number</label>
                <input type="text" id="driversLicense" name="driversLicense" />
              </div>
              <button type="submit" className="register-form-button">Register</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Register;
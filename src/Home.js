import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Home() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simulate login (no API call)
    if (email === 'test@example.com' && password === 'password') {
      console.log('Login successful!');
      navigate('/browse');
    } else {
      alert('Invalid email or password.');
    }
  };

  return (
    <div className="container">
      <header className="navbar">
        <img src="/carmatelogo.png" alt="Carmate Logo" className="logo" />
      </header>

      <main className="main-content">
        <div className="left-section">
          <h1 className="headline">EXPERIENCE THE DRIVE<br />OF YOUR DREAMS</h1>
          <img
            src="/loginpagecar.png"
            alt="Jimny"
            className="car-image"
          />
        </div>

        <div className="right-section">
          <input
            type="text"
            placeholder="Email or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login" onClick={handleLogin}>Login</button>
          <button className="register" onClick={() => navigate('/register')}>Register</button>
          <div className="or-divider">
            <span>or</span>
          </div>
          <button className="social google">
            <img src="/google.png" alt="G" className="google-icon" />
            Continue with Google
          </button>
          <button className="social facebook">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
              alt="F"
              className="facebook-icon"
            />
            Continue with Facebook
          </button>
        </div>
      </main>
    </div>
  );
}

export default Home;
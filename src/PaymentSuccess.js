import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentSuccess.css'; // CSS for styling

const PaymentSuccess = () => {
    const navigate = useNavigate();

    const handleHomeRedirect = () => {
        navigate('/'); // Navigate to home page or any other page
    };

    return (
        <div className="payment-success-wrapper">
            <div className="payment-success-container">
                <h1 className="payment-success-title">Thank You!</h1>
                <div className="payment-success-icon">
                    <img src="/images/credit-card.png" alt="Success" />
                </div>
                <p className="payment-success-message">Payment done successfully</p>
                <p className="payment-success-info">
                    You will be redirected to the home page shortly or click here to return to the home page.
                </p>
                <button className="payment-success-button" onClick={handleHomeRedirect}>Home</button>
            </div>
        </div>
    );
};

export default PaymentSuccess;
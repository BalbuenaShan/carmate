import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './PaymentForm.css'; // CSS file for styling

const PaymentForm = () => {
    const navigate = useNavigate(); // Initialize navigate for navigation
    const [cardNumber, setCardNumber] = useState('');
    const [nameOnCard, setNameOnCard] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvvCode, setCvvCode] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Payment submitted');
        navigate('/information'); // Navigate to the InformationForm
    };

    return (
        <div className="payment-form-wrapper">
            <div className="payment-form-container">
                <h1 className="payment-form-title">Payment Details</h1>
                <form className="payment-form" onSubmit={handleSubmit}>
                    <div className="payment-card-logos">
                        <img className="payment-logo" src="/images/paypal.png" alt="PayPal" />
                        <img className="payment-logo" src="/images/card.png" alt="MasterCard" />
                        <img className="payment-logo" src="/images/visa.png" alt="Visa" />
                    </div>
                    <div className="payment-form-row">
                        <div className="payment-form-group">
                            <label className="payment-label">Card Number</label>
                            <input 
                                className="payment-input" 
                                type="text" 
                                value={cardNumber} 
                                onChange={(e) => setCardNumber(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="payment-form-group">
                            <label className="payment-label">Name on Card</label>
                            <input 
                                className="payment-input" 
                                type="text" 
                                value={nameOnCard} 
                                onChange={(e) => setNameOnCard(e.target.value)} 
                                required 
                            />
                        </div>
                    </div>
                    <div className="payment-form-row">
                        <div className="payment-form-group">
                            <label className="payment-label">Expiry Date</label>
                            <input 
                                className="payment-input" 
                                type="text" 
                                placeholder="MM/DD/YY" 
                                value={expiryDate} 
                                onChange={(e) => setExpiryDate(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="payment-form-group">
                            <label className="payment-label">CVV Code</label>
                            <input 
                                className="payment-input" 
                                type="text" 
                                value={cvvCode} 
                                onChange={(e) => setCvvCode(e.target.value)} 
                                required 
                            />
                        </div>
                    </div>
                    <div className="payment-terms-group">
                        <input 
                            className="payment-checkbox" 
                            type="checkbox" 
                            checked={termsAccepted} 
                            onChange={() => setTermsAccepted(!termsAccepted)} 
                            required 
                        />
                        <label className="payment-terms-label">I Agree to the Terms & Conditions</label>
                    </div>
                    <button type="submit" className="payment-button" disabled={!termsAccepted}>
                        Continue
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PaymentForm;
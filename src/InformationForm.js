import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './InformationForm.css'; // CSS for styling

const InformationForm = () => {
    const navigate = useNavigate(); // Initialize navigate for navigation
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [address, setAddress] = useState('');
    const [country, setCountry] = useState('');
    const [zipCode, setZipCode] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Information submitted');
        navigate('/payment-success'); // Navigate to the Payment Success page after submission
    };

    return (
        <div className="info-form-wrapper">
            <div className="info-form-container">
                <img src="/images/carmate.png" alt="Company Logo" className="info-logo" />
                <h1 className="info-title">Your Information</h1>
                <form className="info-form" onSubmit={handleSubmit}>
                    <div className="info-form-row">
                        <div className="info-form-group">
                            <label>First Name</label>
                            <input 
                                type="text" 
                                value={firstName} 
                                onChange={(e) => setFirstName(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="info-form-group">
                            <label>Last Name</label>
                            <input 
                                type="text" 
                                value={lastName} 
                                onChange={(e) => setLastName(e.target.value)} 
                                required 
                            />
                        </div>
                    </div>
                    <div className="info-form-row">
                        <div className="info-form-group">
                            <label>Email</label>
                            <input 
                                type="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="info-form-group">
                            <label>Phone</label>
                            <input 
                                type="tel" 
                                value={phone} 
                                onChange={(e) => setPhone(e.target.value)} 
                                required 
                            />
                        </div>
                    </div>
                    <div className="info-form-row">
                        <div className="info-form-group">
                            <label>Contact Number</label>
                            <input 
                                type="text" 
                                value={contactNumber} 
                                onChange={(e) => setContactNumber(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="info-form-group">
                            <label>Address</label>
                            <input 
                                type="text" 
                                value={address} 
                                onChange={(e) => setAddress(e.target.value)} 
                                required 
                            />
                        </div>
                    </div>
                    <div className="info-form-row">
                        <div className="info-form-group">
                            <label>Country</label>
                            <input 
                                type="text" 
                                value={country} 
                                onChange={(e) => setCountry(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="info-form-group">
                            <label>ZIP Code</label>
                            <input 
                                type="text" 
                                value={zipCode} 
                                onChange={(e) => setZipCode(e.target.value)} 
                                required 
                            />
                        </div>
                    </div>
                    <div className="info-button-group">
                        <button type="button" onClick={() => navigate(-1)}>Back</button> {/* Back button */}
                        <button type="submit">Done</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default InformationForm;
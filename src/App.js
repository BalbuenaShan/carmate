import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Register from './Register';
import Rent from './CarRental';
import BrowseCarsPage from './BrowseCarsPage';
import Suvs from './Suvs';
import Vans from './Vans';
import Pickups from './Pickups';
import NissanTera from './NissanTera';
import ToyotaFortuner from './ToyotaFortuner';
import MitsubishiMontero from './MitsubishiMontero';
import Isuzumux from './Isuzum-ux';
import FordEverest from './FordEverest';
import Civic from './civic';
import Mirage from './Mirage';
import Vios from './Vios';
import Almera from './Almera'; 
import Alphard from './Alphard';
import Hiace from './Hiace';
import Staria from './Staria';
import Raptor from './Raptor';
import Strada from './Strada';
import Conquest from './Conquest';
import Hilux from './Hilux';
import PaymentForm from './PaymentForm';
import InformationForm from './InformationForm';
import PaymentSuccess from './PaymentSuccess'; // Import the new component



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/carrent" element={<Rent />} />
        <Route path="/browse" element={<BrowseCarsPage />} />
        <Route path="/suvs" element={<Suvs />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/pickups" element={<Pickups />} />
        <Route path="/land-rover" element={<Rent />} />
        <Route path="/nissan-terra" element={<NissanTera />} />
        <Route path="/toyota-fortuner" element={<ToyotaFortuner />} />
        <Route path="/mitsubishi-montero" element={<MitsubishiMontero />} />
        <Route path="/isuzu-mux" element={<Isuzumux />} />
        <Route path="/ford-everest" element={<FordEverest />} />
        <Route path="/civic" element={<Civic />} />
        <Route path="/mirage" element={<Mirage />} /> 
        <Route path="/vios" element={<Vios />} />
        <Route path="/almera" element={<Almera />} />
        <Route path="/alphard" element={<Alphard />} />
        <Route path="/hiace" element={<Hiace />} />
        <Route path="/staria" element={<Staria />} />
        <Route path="/raptor" element={<Raptor />} />
        <Route path="/strada" element={<Strada />} />
        <Route path="/conquest" element={<Conquest />} />
        <Route path="/hilux" element={<Hilux />} />
        <Route path="/payment" element={<PaymentForm />} />
        <Route path="/information" element={<InformationForm />} />
        <Route path="/payment-success" element={<PaymentSuccess />} /> {/* New route */}
      </Routes>
    </Router>
  );
}

export default App;
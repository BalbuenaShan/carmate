import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BrowseCarsPage.css';

function Suvs() {
  const navigate = useNavigate();

  const goToCars = () => navigate('/browse');
  const goToVans = () => navigate('/vans');
  const goToPickups = () => navigate('/pickups');
  const goToNissanTera = () => navigate('/nissan-terra');
  const goToLandRover = () => navigate('/land-rover');
  const goToToyotaFortuner = () => navigate('/toyota-fortuner');
  const goToMontero = () => navigate('/mitsubishi-montero');
  const goToIsuzuMux = () => navigate('/isuzu-mux');
  const goToFordEverest = () => navigate('/ford-everest'); // Add navigation for Everest

  return (
    <div className="browse-cars-container">
      {/* Logo */}
      <div className="browse-cars-logo">
        <img src="/carmatelogo.png" alt="Carmate Logo" className="logo-image" />
      </div>

      <main className="browse-cars-main">
        {/* Sidebar */}
        <aside className="browse-cars-sidebar">
          <div className="browse-cars-category" onClick={goToCars} style={{ cursor: 'pointer' }}>
            <img src="/Cars.png" alt="Cars" />
          </div>
          <div className="browse-cars-category">
            <img src="/Suvs.png" alt="SUVs" />
          </div>
          <div className="browse-cars-category" onClick={goToVans} style={{ cursor: 'pointer' }}>
            <img src="/Vans.png" alt="Vans" />
          </div>
          <div className="browse-cars-category" onClick={goToPickups} style={{ cursor: 'pointer' }}>
            <img src="/Pickup's.png" alt="Pickups" />
          </div>
        </aside>

        {/* Listings */}
        <section className="browse-cars-listings">
          <div className="browse-cars-listing">
            <img src="/landr.png" alt="Land Rover" onClick={goToLandRover} style={{ cursor: 'pointer' }} />
            <p>Land Rover</p>
            <img src="/mux.png" alt="Mu-X" onClick={goToIsuzuMux} style={{ cursor: 'pointer' }} />
            <p>Mu-X</p>
          </div>
          <div className="browse-cars-listing">
            <img src="/terra.png" alt="Terra" onClick={goToNissanTera} style={{ cursor: 'pointer' }} />
            <p>Terra</p>
            <img src="/everest.png" alt="Everest" onClick={goToFordEverest} style={{ cursor: 'pointer' }} /> {/* Modified to navigate to Ford Everest */}
            <p>Everest</p>
          </div>
          <div className="browse-cars-listing">
            <img src="/fortuner.png" alt="Fortuner" onClick={goToToyotaFortuner} style={{ cursor: 'pointer' }} />
            <p>Fortuner</p>
          </div>
          <div className="browse-cars-listing">
            <img src="/montero.png" alt="Montero" onClick={goToMontero} style={{ cursor: 'pointer' }} />
            <p>Montero</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Suvs;

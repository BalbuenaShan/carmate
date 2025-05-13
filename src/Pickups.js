import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BrowseCarsPage.css';

function Pickups() {
  const navigate = useNavigate();

  const goToCars = () => {
    navigate('/browse');
  };

  const goToSuvs = () => {
    navigate('/suvs');
  };

  const goToVans = () => {
    navigate('/vans');
  };

  const goToRaptor = () => {
    navigate('/raptor');
  };

  const goToStrada = () => {
    navigate('/strada');
  };

  const goToConquest = () => {
    navigate('/conquest');
  };

  const goToHilux = () => {
    navigate('/hilux'); // ✅ Added navigation to Hilux
  };

  return (
    <div className="browse-cars-container">
      {/* Logo Section */}
      <div className="browse-cars-logo">
        <img src="/carmatelogo.png" alt="Carmate Logo" className="logo-image" />
      </div>

      {/* Main Content Section */}
      <main className="browse-cars-main">
        {/* Sidebar Section */}
        <aside className="browse-cars-sidebar">
          <div className="browse-cars-category" onClick={goToCars} style={{ cursor: 'pointer' }}>
            <img src="/Cars.png" alt="Cars" />
          </div>
          <div className="browse-cars-category" onClick={goToSuvs} style={{ cursor: 'pointer' }}>
            <img src="/Suvs.png" alt="SUVs" />
          </div>
          <div className="browse-cars-category" onClick={goToVans} style={{ cursor: 'pointer' }}>
            <img src="/Vans.png" alt="Vans" />
          </div>
          <div className="browse-cars-category">
            <img src="/Pickup's.png" alt="Pickups" />
          </div>
        </aside>

        {/* Car Listings Section */}
        <section className="browse-cars-listings">
          <div className="browse-cars-listing" onClick={goToRaptor} style={{ cursor: 'pointer' }}>
            <img src="/Raptor.png" alt="Raptor" />
            <p>Raptor</p>
          </div>
          <div className="browse-cars-listing" onClick={goToStrada} style={{ cursor: 'pointer' }}>
            <img src="/Strada.png" alt="Strada" />
            <p>Strada</p>
          </div>
          <div className="browse-cars-listing" onClick={goToConquest} style={{ cursor: 'pointer' }}>
            <img src="/Conquest.png" alt="Conquest" />
            <p>Conquest</p>
          </div>
          <div className="browse-cars-listing" onClick={goToHilux} style={{ cursor: 'pointer' }}>
            <img src="/Hilux.png" alt="Hilux" />
            <p>Hilux</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Pickups;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BrowseCarsPage.css';

function BrowseCarsPage() {
  const navigate = useNavigate();

  // Navigation handlers
  const goToSuvs = () => navigate('/suvs');
  const goToVans = () => navigate('/vans');
  const goToPickups = () => navigate('/pickups');
  const goToCivic = () => navigate('/civic');
  const goToMirage = () => navigate('/mirage');
  const goToVios = () => navigate('/vios');
  const goToAlmera = () => navigate('/almera');

  return (
    <div className="browse-cars-container">
      {/* Logo Section */}
      <div className="browse-cars-logo">
        <img src="/carmatelogo.png" alt="Carmate Logo" className="logo-image" />
      </div>

      {/* Main Content */}
      <main className="browse-cars-main">
        {/* Sidebar */}
        <aside className="browse-cars-sidebar">
          <div className="browse-cars-category">
            <img src="/Cars.png" alt="Cars" />
          </div>
          <div className="browse-cars-category" onClick={goToSuvs} style={{ cursor: 'pointer' }}>
            <img src="/Suvs.png" alt="SUVs" />
          </div>
          <div className="browse-cars-category" onClick={goToVans} style={{ cursor: 'pointer' }}>
            <img src="/Vans.png" alt="Vans" />
          </div>
          <div className="browse-cars-category" onClick={goToPickups} style={{ cursor: 'pointer' }}>
            <img src="/Pickup's.png" alt="Pickups" />
          </div>
        </aside>

        {/* Car Listings */}
        <section className="browse-cars-listings">
          <div className="browse-cars-listing" onClick={goToCivic} style={{ cursor: 'pointer' }}>
            <img src="/civic.png" alt="Civic" />
            <p>Civic</p>
          </div>
          <div className="browse-cars-listing" onClick={goToMirage} style={{ cursor: 'pointer' }}>
            <img src="/mirage.png" alt="Mirage" />
            <p>Mirage</p>
          </div>
          <div className="browse-cars-listing" onClick={goToVios} style={{ cursor: 'pointer' }}>
            <img src="/vios.png" alt="Vios" />
            <p>Vios</p>
          </div>
          <div className="browse-cars-listing" onClick={goToAlmera} style={{ cursor: 'pointer' }}>
            <img src="/almera.png" alt="Almera" />
            <p>Almera</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default BrowseCarsPage;

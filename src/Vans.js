import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BrowseCarsPage.css';

function Vans() {
  const navigate = useNavigate();

  const goToCars = () => navigate('/browse');
  const goToSuvs = () => navigate('/suvs');
  const goToPickups = () => navigate('/pickups');
  const goToAlphard = () => navigate('/alphard');
  const goToHiace = () => navigate('/hiace'); // ✅ Added navigation to Hiace
  const goToStaria = () => navigate('/staria'); // ✅ Added navigation to Staria

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
          <div className="browse-cars-category">
            <img src="/Vans.png" alt="Vans" />
          </div>
          <div className="browse-cars-category" onClick={goToPickups} style={{ cursor: 'pointer' }}>
            <img src="/Pickup's.png" alt="Pickups" />
          </div>
        </aside>

        {/* Car Listings Section */}
        <section className="browse-cars-listings">
          <div className="browse-cars-listing" onClick={goToAlphard} style={{ cursor: 'pointer' }}>
            <img src="/Alphard.png" alt="Alphard" />
            <p>Alphard</p>
          </div>
          <div className="browse-cars-listing" onClick={goToHiace} style={{ cursor: 'pointer' }}>
            <img src="/Hiace.png" alt="Hiace" />
            <p>Hiace</p>
          </div>
          <div className="browse-cars-listing" onClick={goToStaria} style={{ cursor: 'pointer' }}>
            <img src="/Staria.png" alt="Staria" />
            <p>Staria</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Vans;

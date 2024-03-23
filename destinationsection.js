import React from 'react';

const DestinationsSection = () => {
  return (
    <section id="destinations">
      <h2>Popular Destinations</h2>
      <div className="destination-card">
        <img src="destination1.jpg" alt="Destination 1" />
        <div className="destination-info">
          <h3>Destination 1</h3>
          <p>Description of Destination 1</p>
        </div>
      </div>
      <div className="destination-card">
        <img src="destination2.jpg" alt="Destination 2" />
        <div className="destination-info">
          <h3>Destination 2</h3>
          <p>Description of Destination 2</p>
        </div>
      </div>
      {/* Add more destination cards as needed */}
    </section>
  );
};

export default DestinationsSection;

import React, { useState } from 'react';
import './LocationPage.css';

const LocationPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleServiceSelect = (event) => {
    setSelectedService(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // submit search
    console.log('Search term:', searchTerm);
    console.log('Selected service:', selectedService);
  };

  const cities = [
    { name: 'Las Vegas', image: process.env.PUBLIC_URL + '/las-vegas.jpeg' },
    { name: 'New York', image: process.env.PUBLIC_URL + '/new-york.jpeg' },
    { name: 'Los Angeles', image: process.env.PUBLIC_URL + '/la.jpeg' },
    // Add more cities here
  ];

  const services = [
    { name: 'Wedding', image: process.env.PUBLIC_URL + '/wedding.jpeg' },
    { name: 'Party', image: process.env.PUBLIC_URL + '/party.jpeg' },
    { name: 'Concert', image: process.env.PUBLIC_URL + '/concert.jpeg' },
    // Add more services here
  ];

  return (
    <div className="location-page">
      <header>
        <h1>Shofeur</h1>
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search city"
            value={searchTerm}
            onChange={handleSearch}
          />
          <select value={selectedService} onChange={handleServiceSelect}>
            <option value="">Select service</option>
            {services.map((service) => (
              <option value={service.name} key={service.name}>
                {service.name}
              </option>
            ))}
          </select>
          <button type="submit">Search</button>
        </form>
      </header>

      <section className="cities-section">
        <h2>City</h2>
        <div className="cities-container">
          {cities.map((city) => (
            <div className="city-card" key={city.name}>
              <img className="city-image" src={city.image} alt={city.name} />
              <p>{city.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="services-section">
        <h2>Service</h2>
        <div className="services-container">
          {services.map((service) => (
            <div className="service-card" key={service.name}>
              <img className="service-image" src={service.image} alt={service.name} />
              <p>{service.name}</p>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p> &copy; Shofeur 2023</p>
      </footer>
    </div>
  );
};

export default LocationPage;

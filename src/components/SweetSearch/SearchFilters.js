import React, { useState, useEffect } from 'react';

const SearchFilters = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [openNow, setOpenNow] = useState(false);

  useEffect(() => {
    const autocomplete = new window.google.maps.places.Autocomplete(
      document.getElementById('location-input')
    );

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (!place.geometry) {
        console.log('No details available for input: ', place.name);
        return;
      }
      setLocation(place.formatted_address);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ query, location, openNow });
  };

  return (
    <div>
      <h2>Search Filters</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Keyword: 
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Location: 
            <input
              id="location-input"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Open Now:
            <input
              type="checkbox"
              checked={openNow}
              onChange={(e) => setOpenNow(e.target.checked)}
            />
          </label>
        </div>
        <div>
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchFilters;

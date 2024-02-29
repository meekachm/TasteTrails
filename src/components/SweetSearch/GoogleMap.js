import React, { useEffect, useRef, useCallback } from 'react';

const GoogleMap = ({ searchCriteria }) => {
  const mapRef = useRef(null);

  // Function to load the Google Maps JavaScript API asynchronously
  const loadMapScript = (callback) => {
    const script = document.createElement('script');
    // Ensure the API key is correctly loaded from the environment variables
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.onload = callback;
    document.body.appendChild(script);
  };

  // Function to initialize the map
  const initMap = useCallback(() => {
    // Default center coordinates
    let center = { lat: 40.7128, lng: -74.006 };

    // If searchCriteria is provided and has location data, use it to center the map
    if (searchCriteria && searchCriteria.location) {
      center = {
        lat: parseFloat(searchCriteria.location.latitude),
      };
    }

    new window.google.maps.Map(mapRef.current, {
      center: center,
      zoom: 12,
    });
  }, [searchCriteria]);

  useEffect(() => {
    // Load the Google Maps JavaScript API
    loadMapScript(() => {
      // Initialize the map once the script is loaded
      initMap();
    });
  }, [initMap]); // Re-run effect when initMap changes

  return <div ref={mapRef} style={{ width: '100%', height: '400px' }} />;
};

export default GoogleMap;

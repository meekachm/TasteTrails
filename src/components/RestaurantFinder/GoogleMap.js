import React, { useEffect, useRef } from 'react';

// Function to load the Google Maps JavaScript API asynchronously
const loadMapScript = (callback) => {
  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyANrMPZGTEP0iPVUyPVXjHFRVCYutOzlDc&libraries=places`;
  script.async = true;
  script.onload = callback;
  document.body.appendChild(script);
};

const GoogleMap = () => {
  const mapRef = useRef(null);

  // Function to initialize the map
  const initMap = () => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 40.7128, lng: -74.006 },
      zoom: 12,
    });
  };

  useEffect(() => {
    // Load the Google Maps JavaScript API
    loadMapScript(() => {
      // Initialize the map once the script is loaded
      initMap();
    });
  }, []);

  return <div ref={mapRef} style={{ width: '100%', height: '400px' }} />;
};

export default GoogleMap;

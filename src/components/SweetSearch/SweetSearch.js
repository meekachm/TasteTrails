import React, { useState } from 'react';
import SearchFilters from './SearchFilters';
import GoogleMap from './GoogleMap';
import './SweetSearch.css';

const SweetSearch = () => {
  const [searchCriteria, setSearchCriteria] = useState(null);

  const handleSearch = (criteria) => {
    setSearchCriteria(criteria);
  };

  return (
    <div className="sweet-search-container">
      <h2 className="sweet-search-title">Explore and Discover New Sweet Delights!</h2>
      <div className="sweet-search-content">
        <div className="search-filters-container">
          <SearchFilters onSearch={handleSearch} />
        </div>
        <div className="google-map-container">
          <GoogleMap searchCriteria={searchCriteria} />
        </div>
      </div>
    </div>
  );
};

export default SweetSearch;

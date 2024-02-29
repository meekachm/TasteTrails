import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './components/Home/Home';
import SweetSpots from './components/SweetSpots/SweetSpots';
import SweetSearch from './components/SweetSearch/SweetSearch';
import RandomSweets from './components/RandomSweets/RandomSweets';
import About from './components/About/About';
import RestaurantCard from './components/RestaurantCard/RestaurantCard';

const root = createRoot(document.getElementById('root'));

// Define your routes and components
const routes = (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/sweet-spots" element={<SweetSpots />} />
        <Route path="/random" element={<RandomSweets />} />
        <Route path="/about" element={<About />} />
        <Route path="/sweet-search" element={<SweetSearch />} />
        <Route path="/card/:id" element={<RestaurantCard />} />
      </Route>
    </Routes>
  </Router>
);

// Render the root element
root.render(routes);

export default App;

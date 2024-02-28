import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import RestaurantDiary from './components/RestaurantDiary/RestaurantDiary';
import RestaurantFinder from './components/RestaurantFinder/RestaurantFinder';
import RandomEat from './components/RandomEat/RandomEat';
import About from './About';
import RestaurantCard from './components/RestaurantCard/RestaurantCard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/diary" element={<RestaurantDiary />} />
        <Route path="/random" element={<RandomEat />} />
        <Route path="/about" element={<About />} />
        <Route path="/restaurant-finder" element={<RestaurantFinder />} />
        <Route path="/restaurant/:id" element={<RestaurantCard />} /> 
      </Route>
    </Routes>
  </Router>
);

export default App;
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">About TasteTrails</h1>
      <p className="about-text">Welcome to TasteTrails, your go-to app for discovering and sharing the sweetest dessert spots around!</p>
      <p className="about-text">At TasteTrails, we're passionate about connecting dessert enthusiasts with the most delectable treats in town. Whether you're craving a heavenly slice of cake, artisanal ice cream, or a perfectly crafted pastry, TasteTrails is here to guide you on your dessert adventures.</p>
      
      <h2 className="about-heading">How it Works</h2>
      <p className="about-text">With TasteTrails, exploring dessert destinations has never been easier. Simply open the app, browse through a curated selection of top-rated dessert places, and discover hidden gems recommended by fellow dessert lovers. From cozy cafes to trendy ice cream parlors, there's always something new to explore on TasteTrails.</p>
      
      <h2 className="about-heading">Features</h2>
      <ul className="about-features">
        <li><strong>Discover:</strong> Explore a diverse range of dessert spots, from classic bakeries to innovative dessert cafes, all conveniently curated in one place.</li>
        <li><strong>Share:</strong> Share your favorite dessert places with the TasteTrails community and spread the sweetness. Snap mouthwatering photos, write reviews, and help fellow dessert enthusiasts discover their next indulgence.</li>
        <li><strong>Review:</strong> Leave honest reviews and ratings based on your dessert experiences. Whether it's praising the flakiness of a croissant or raving about the richness of an ice cream flavor, your reviews help others make informed decisions.</li>
        <li><strong>Search:</strong> Looking for something specific? Use our search feature to find dessert places by location, cuisine, or special features. Whether you're in the mood for French pastries or Asian-inspired desserts, TasteTrails has you covered.</li>
      </ul>
      
      <p className="about-text">Ready to embark on your next dessert adventure? Let the sweet journey begin!✨</p>
      
      <p className="about-text"><em>TasteTrails: Discover, Share, Indulge.</em></p>
    </div>
  );
};

export default About;

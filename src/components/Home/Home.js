import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="welcome-section">
      <h1>Welcome to TasteTrails!</h1>
      <h4>Discover and indulge in the sweetest dessert spots around.</h4>
      <p><strong>Current Featured Spot:</strong></p>
      <div className="box">
        <h3>
          Explore the Heartwarming Story Behind Kansha Creamery:
        </h3> 
        <h4>
          A Charity-Focused LA Ice Cream Shop
        </h4>
        <img src="https://assets3.thrillist.com/v1/image/2879984/1584x1056/crop;webp=auto;jpeg_quality=60;progressive.jpg" alt="Kansha Creamery" width="400" height="300" />
        <p>
          Indulge in more than just delectable treats at Kansha Creamery – this sibling-run sweet spot is a beacon of generosity in the heart of Torrance. Learn how Elaine Yukari Marumoto-Perez and her brother James Tatsuya Marumoto are using their ice cream shop as a force for good, raising nearly $300,000 for charity since 2015. Discover their inspiring journey, from humble beginnings to becoming a beloved community hub, all while making a difference in the lives of those in need.
        </p>
        <p>
          Read the full article by Joshua Lurie on Thrillist: <a href="https://www.thrillist.com/eat/los-angeles/kansha-creamery-la-ice-cream-shop-charity">Inside Kansha Creamery’s Charity-Focused LA Ice Cream Shop</a>
        </p>
        <p>
          And don't forget to explore Kansha Creamery's featured place of the day on RestaurantCard: <a href="card/23#/card/23">Kansha Creamery Feature</a>
        </p>
        <p>
          With every scoop, Kansha Creamery is spreading joy and making a meaningful impact – join the movement today!
        </p>
      </div>
    </div>
  );
};

export default Home;

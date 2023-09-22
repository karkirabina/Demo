import React from 'react';
import '../../Css/Homepage.css';

const HomePage = () => {
  return (
    <div className="home-page">
    <header className="header">
      <h1>Welcome to Our Online Store</h1>
      <p>Discover the Best Deals</p>
    </header>
    <section className="featured-products">
      <h2>Featured Products</h2>
      <div className="product-card">
          <img src="/product1.jpg" alt="Product 1" />
          <h3>Product 1</h3>
          <p>Price: $49.99</p>
        </div>
        <div className="product-card">
          <img src="/product2.jpg" alt="Product 2" />
          <h3>Product 2</h3>
          <p>Price: $59.99</p>
        </div>
        {/* Add more product cards here */}
      </section>
    
    </div>
    // {/* // <div>
    // //   <h1>Welcome to My Online Store</h1>
    // //   <p>Discover amazing products and shop with us!</p>
    // // </div> */}
  );
};

export default HomePage;

import React from "react";
import { Link } from "react-router-dom";
import "../Css/Navbar.css";

function Index() {
  const phoneNumber = '+9779816961245';
  return (
    <nav classname="navbar">
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/product"}>Product</Link>
        </li>
        <li><Link to={"/about"}>About</Link></li>
          <li><Link to={"/contact"}>Contact</Link></li>

        {/* <li><a href="/">Home</a></li>
        <li><a href="/product">Products</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact Us</a></li> */}
      </ul>
      <div className="phone-number">
      
        <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
      </div>
    </nav>
  );
};
export default Index;

import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import './index.css';
import logo from './images/logo.png';
import iglogo from './images/iglogo.png';
import tiktoklogo from './images/tiktoklogo.png';

function Navbar() {
  return (
    <div class="row-header">
        <div class="logo">
          <img src={logo} alt="Sarcastic Brewing Logo" style={{ height: "15ch" }}/>
          <p class="logo-text">
          arcastic Brewing
          </p>
        </div>
        <div class="header-buttons">
          <button class="header-button">
            <Link to="/" style={{ textDecoration: 'none', color:'#f9f8dc' }}>Home</Link>
          </button>
          <button class="header-button">
            <Link to="/products" style={{ textDecoration: 'none', color:'#f9f8dc' }}>Products</Link>
          </button>
          <button class="header-button">
            <Link to="/merch" style={{ textDecoration: 'none', color:'#f9f8dc' }}>Merch</Link>
          </button>
          <button class="header-button">
            <Link to="/contact" style={{ textDecoration: 'none', color:'#f9f8dc' }}>Contact Us</Link>
          </button>
          <button class="header-button">
            <Link to="/about" style={{ textDecoration: 'none', color:'#f9f8dc' }}>About Us</Link>
          </button>
          <button class="header-button">
            <Link to="/buy" style={{ textDecoration: 'none', color:'#f9f8dc' }}>Find a Retailer</Link>
          </button>
        </div>
        <div class="social-buttons">
          <button class="social-button"><img src={iglogo} alt="Instagram Logo" style={{ height: "25px" }}/></button>
          <button class="social-button"><img src={tiktoklogo} alt="Tik Tok Logo" style={{ height: "25px" }}/></button>
        </div>
    </div>
  );
}

export default Navbar;
import logo from './images/logo.png';
import iglogo from './images/iglogo.png';
import tiktoklogo from './images/tiktoklogo.png';
import './App.css';
import React from "react";
import Header from "./Header";
import Body from "./Body"; //we'll be using these later


function App() {
  return (
    <div class="box">
      <div class="row-header">
        <div class="logo">
          <img src={logo} alt="Sarcasm Brewing Logo" style={{ height: "30%" }}/>
          <p class="logo-text">
          Sarcastic Brewing
          </p>
        </div>
        <div class="header-buttons">
          <button class="header-button">Home</button>
          <button class="header-button">Products</button>
          <button class="header-button">Merch</button>
          <button class="header-button">Contact Us</button>
          <button class="header-button">About Us</button>
          <button class="header-button">Find a Retailer</button>
        </div>
        <div class="social-buttons">
          <button class="social-button"><img src={iglogo} alt="Instagram Logo" style={{ height: "25px" , marginRight: "20px", marginLeft: "40px"}}/></button>
          <button class="social-button"><img src={tiktoklogo} alt="Tik Tok Logo" style={{ height: "25px" }}/></button>
        </div>
      </div>
      <div class="row-content">
        <p>
        <b>BODY</b>
        </p>
      </div>
      <div class="row-footer">
        <p><b>FOOTER</b></p>
      </div>
    </div>
  );
}

export default App;

import logo from './images/logo.png';
import iglogo from './images/iglogo.png';
import tiktoklogo from './images/tiktoklogo.png';
import beercan from './images/beercan.jpg';
import offering from './images/offering.jpg';
import longcanimage from './images/longcanimage.jpg';
import './App.css';
import React from "react";
import Header from "./Header";
import Body from "./Body"; //we'll be using these later


function App() {
  return (
    <div class="box">
      <div class="row-header">
        <div class="logo">
          <img src={logo} alt="Sarcastic Brewing Logo" style={{ height: "15ch" }}/>
          <p class="logo-text">
          arcastic Brewing
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
          <button class="social-button"><img src={iglogo} alt="Instagram Logo" style={{ height: "25px" }}/></button>
          <button class="social-button"><img src={tiktoklogo} alt="Tik Tok Logo" style={{ height: "25px" }}/></button>
        </div>
      </div>
      <div class="row-content">
        <h1>DON'T GET TOO EXCITED. OR WE MIGHT JUST MAKE ANOTHER IPA</h1>
        <img src={beercan} alt="Beer Can Logo" style={{ height: "100ch" }}/>
        <h1>JUST KIDDING IT DOESN'T MATTER. WE MADE ANOTHER IPA.</h1>
        <h1>AND SPRINKLED IN SOME OTHERS.</h1>
        <hr/>
        <h1 class="shop">THE GOODS</h1>
        <div class="offering">
          <div>
            <img src={offering} alt="Beer Can Logo" style={{ height: "50ch" }}/>
            <h3 class="shop">ANOTHER FREAKING IPA</h3>
            <button class="buy-button">SHUT UP AND TAKE MY MONEY</button>
          </div>
          <div>
            <img src={offering} alt="Beer Can Logo" style={{ height: "50ch" }}/>
            <h3 class="shop">JUST A BORING PALE ALE</h3>
            <button class="buy-button">SHUT UP AND TAKE MY MONEY</button>
          </div>
          <div>
            <img src={offering} alt="Beer Can Logo" style={{ height: "50ch" }}/>
            <h3 class="shop">PILS-WHAT?</h3>
            <button class="buy-button">SHUT UP AND TAKE MY MONEY</button>
          </div>
        </div>
        <img src={longcanimage} alt="Can on a table" style={{ height: "50ch" , marginTop: "10%", objectFit: "cover", width: "100%", height: "100%"}}/>
        <div class="email-div">
          <h3>ENTER YOUR EMAIL TO KEEP UP WITH THE LATEST SARCASTIC SHENANIGANS.</h3>
          <small>(evil shenanigans of course)</small>
          <div style={{ display: "flex", justifyContent: "center", margin: "5%" }}>
            <form style={{paddingRight:"3%"}}>
              <input class="email-input" type={"text"} placeholder="Email Address"></input>
            </form>
            <button class="email-button">SIGN ME UP</button>
          </div>
        </div>
      </div>
      <div class="row-footer">
        <div class="social-buttons">
          <button class="social-button"><img src={iglogo} alt="Instagram Logo" style={{ height: "25px" }}/></button>
          <button class="social-button"><img src={tiktoklogo} alt="Tik Tok Logo" style={{ height: "25px" }}/></button>
        </div>
        <p class="saying">SARCASTIC BREWING™</p>
      </div>
    </div>
  );
}

export default App;

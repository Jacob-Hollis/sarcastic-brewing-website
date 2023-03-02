import '../index.css';
import React from 'react';
import beercan from '../images/beercan.jpg';
import offering from '../images/offering.jpg';
import longcanimage from '../images/longcanimage.jpg';

function Home(props) {
    return (
    <div class="content">
      <div class="row-content">
        <h1>WE DON'T THINK LIFE SHOULD BE THAT SERIOUS</h1>
        <h1>ESPECIALLY WHEN IT COMES TO BEER</h1>
        <img src={beercan} alt="Beer Can Logo" style={{ height: "100ch" }}/>
        <h1>SO DON'T TAKE OUR BEER TOO SERIOUSLY.</h1>
        <h1>SERIOUSLY, WE MEAN IT</h1>
        <hr/>
        <h1 class="shop">THE GOODS</h1>
        <div class="offering">
          <div>
            <img src={offering} alt="Beer Can Logo" style={{ height: "50ch" }}/>
            <h3 class="shop">JUST ANOTHER IPA</h3>
            <button class="buy-button">SHUT UP AND TAKE MY MONEY</button>
          </div>
          <div>
            <img src={offering} alt="Beer Can Logo" style={{ height: "50ch" }}/>
            <h3 class="shop">A BORING PALE ALE</h3>
            <button class="buy-button">SHUT UP AND TAKE MY MONEY</button>
          </div>
          <div>
            <img src={offering} alt="Beer Can Logo" style={{ height: "50ch" }}/>
            <h3 class="shop">IT'S SOUR HOUR</h3>
            <button class="buy-button">SHUT UP AND TAKE MY MONEY</button>
          </div>
          <div>
            <img src={offering} alt="Beer Can Logo" style={{ height: "50ch" }}/>
            <h3 class="shop">THIS ONE GOT CITRUS IN IT</h3>
            <button class="buy-button">SHUT UP AND TAKE MY MONEY</button>
          </div>
          <div>
            <img src={offering} alt="Beer Can Logo" style={{ height: "50ch" }}/>
            <h3 class="shop">ALL ABOOT THE STOOT</h3>
            <button class="buy-button">SHUT UP AND TAKE MY MONEY</button>
          </div>
        </div>
        <img src={longcanimage} alt="Can on a table" style={{ marginTop: "10%", objectFit: "cover", width: "100%", height: "100%"}}/>
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
    </div>
    );
}

export default Home;
import React from "react";
import './index.css';
import iglogo from './images/iglogo.png';
import tiktoklogo from './images/tiktoklogo.png';

function Navbar(props) {
  return (
    <div class="row-footer">
        <div class="social-buttons">
          <button class="social-button"><img src={iglogo} alt="Instagram Logo" style={{ height: "25px" }} onClick={() => props.openInNewTab(props.tiktoklink)}/></button>
          <button class="social-button"><img src={tiktoklogo} alt="Tik Tok Logo" style={{ height: "25px" }} onClick={() => props.openInNewTab(props.iglink)}/></button>
        </div>
        <p class="saying">SARCASTIC BREWING™</p>
    </div>
  );
}

export default Navbar;
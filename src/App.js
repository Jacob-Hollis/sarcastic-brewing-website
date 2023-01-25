import logo from './images/logowithname.png';
import './App.css';
import React from "react";
import Header from "./Header";
import Body from "./Body"; //we'll be using these later


function App() {
  return (
    <div class="box">
    <div class="row header">
      <img src={logo} className="App-logo" alt="logo" style={{ width: "30%", height: "30%" }}/>
      <button>Home</button>
    </div>
    <div class="row content">
      <p>
      < b>content</b>
        (fills remaining space)
      </p>
    </div>
    <div class="row footer">
      <p><b>footer</b> (fixed height)</p>
    </div>
</div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
function tick() {
    const element = (
      <div style={{color:"pink"}}>
        <h1>Hello, world!</h1>
        <h2>Time is: {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(    element,    document.getElementById('time')  );}
  
  setInterval(tick, 1000);


export default tick;
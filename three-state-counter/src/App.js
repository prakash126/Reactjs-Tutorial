import React,{useState} from 'react';
import ReactDom from 'react-dom';

import "./App.css";
import tick from './Date';
function App(){
//here we create setCount function and its variable is count.the variable is a state variable.
const [count,setCount]=useState(0)

  return(
    <div className="App">
      
      <header id="time">
      <tick />
        
      </header>
      <h1>Counter App Using State/hooks</h1><br></br>
      <h2>Current value of count is {count}</h2>

      <button onClick={()=>setCount(0)}>Reset Counter</button>
      <button onClick={()=>count>9?"":setCount(count+1)}>Increase Counter</button>
      <button onClick={()=>count>0?setCount(count-1):""}>Decrease Counter</button>
      
    </div>
  );
}

export default App;
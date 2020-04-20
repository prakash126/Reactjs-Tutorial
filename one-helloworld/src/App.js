import React from 'react';

import "./style.css";
import Button from './Button'


const App = ()=>(
    <div>
        <h1 style={{textAlign:"center"}}>Hello World!!</h1>
        <Button title="Play Store"></Button>
        <Button title="App Store"></Button>
        <Button></Button>
    </div>
)

export default App;
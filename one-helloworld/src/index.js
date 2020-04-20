//First import react from react ,React-dom, then at last render the file

import React from 'react';
import ReactDom from 'react-dom';
import App from './App';



//here ReactDOM.render function is used to send the function result to the root.
ReactDom.render(<App />,document.getElementById("root"));
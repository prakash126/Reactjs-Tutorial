import React,{useState,useEffect} from 'react';
import {Container,Row,Col} from 'reactstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Axios from 'axios'//Axios:-Promise based HTTP client for the browser and node.js.It handle the Api 
import MyCard from './MyCard'
const App = ()=>{
  const [details,setDetails] = useState({});
  
  const fetchDetails = async ()=>{
    const {data} = await Axios.get("https://randomuser.me/api/");
    console.log("Response",data);

    //setDetails(data.results[0]);
    
    const details=data.results[0];

    setDetails(details);

  }

  useEffect(()=>{
    fetchDetails();
  },[]);

  return (
    <Container fluid className="p-4 bg-primary App">
      <h1 className="DIS">DISPLAY PROFILE BY AXIOS API</h1>
      <Row>
        <Col md={4} className="offset-md-4 mt-4">
          <MyCard details={details}/>
        </Col>
      </Row>
    </Container>
  )
}

export default App;

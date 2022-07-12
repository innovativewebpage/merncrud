import React,{useEffect} from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Row,Col,Container,Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import {
BrowserRouter as Router,
Routes,
Route,
Link,
useParams

} from "react-router-dom";

import {  getInitialData } from './actions';



import SignIn from './SignIn';
import Fetch from './fetch';




import './App.css';

function App() {
	
const dispatch = useDispatch();
  const initial_data = useSelector((state) => state.initial);



  useEffect(() => {
      dispatch(getInitialData());
  }, []);
	
  return (
  <Router>
    <div className="App">

 <Row>
 
 
   <Col xs={6}>
	<Routes>
	 
	  <Route path="/"  element={<Fetch/>}>Fetch
	  </Route>
	 
</Routes>
 </Col>
 
     <Col xs={6}>
	<Routes>
	 
	  <Route path="/"  element={<SignIn/>}>Sign In
	  </Route>
	 
</Routes>
 </Col>
 
  
	   </Row>



	  
	  
		
    </div>
	  </Router>
  );

}

export default App;

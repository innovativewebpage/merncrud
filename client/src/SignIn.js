import React,{useState,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { insert } from './actions';

import { Row,Col,Container,Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './App.css';



function Insert() {
   
   const [moviename, setMovieName] = useState('');
   const [rating, setRating] = useState('');
   const [cast, setCast] = useState([]);
   const [genre, setGenre] = useState('');
  // const [releaseDate, setReleaseDate] = useState('');
 
 
 
  const dispatch = useDispatch();  
let navigate = useNavigate();

const initial = useSelector((state) => state.initial);



 useEffect(() => {
  
  
	
  }, []);

	




  
 




const clear = () => {
    
 setMovieName('');
   setRating('');
   setGenre('');
  // setReleaseDate('');
  setCast('');
 
  }


	

	 
	 
  const userInsert = (e) => {
        e.preventDefault();
		
		
        const user = {
           moviename,
			rating,cast,genre
			}
			

		console.log('user===',user)	
	dispatch(insert(user));
		clear();

	}
	
	
  return (
    <div >	




  
  



  
  
	<Form onSubmit={userInsert}>
  <Form.Group className="mb-3" >
    <Form.Label>Movie name</Form.Label>
    <Form.Control type="text" placeholder="Enter movie name" 
	value={moviename}
onChange={(e) => setMovieName(e.target.value)}
	
/>
   
   
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Rating</Form.Label>
    <Form.Control type="text" placeholder="Enter rating" 
	value={rating}
	onChange={(e) => setRating(e.target.value)}
	/>
  </Form.Group>
  
  
   <Form.Group className="mb-3">
    <Form.Label>Cast</Form.Label>
    <Form.Control type="text" placeholder="Enter cast" 
	value={cast}
	onChange={(e) => setCast(e.target.value)}
	/>
  </Form.Group>
  
 
  



  <Form.Group className="mb-3" >
    <Form.Label>Genre</Form.Label>
    <Form.Control type="text" placeholder="Enter Genre"

value={genre}
	onChange={(e) => setGenre(e.target.value)}
	/>
  </Form.Group>



  {/*<Form.Group className="mb-3" >
    <Form.Label>Release Date</Form.Label>
    <Form.Control type="text" placeholder="releaseDate"
value={releaseDate}

	onChange={(e) => setReleaseDate(e.target.value)}
	/>
  </Form.Group>*/}







  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
     
	


	
	

    </div>
  );
}

export default Insert;

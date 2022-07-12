import React,{useState,useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { updateMovie,deleteProdcut} from './actions';

import { Row,Col,Container,Form,Modal,Table  } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './App.css';



function SignIn() {
	
	
	
	
	const [movieDetails, setMovieDetails] = useState(null);
	const [movieDetailModal, setMovieDetailModal]=useState(false);
	
	 let navigate = useNavigate();
	 const dispatch = useDispatch();


	const initial_data = useSelector((state) => state.initial);

	


const deleteHandler = (product) => {
     dispatch(deleteProdcut(product._id));
  };


 const submitUserForm = (e) => {
	 e.preventDefault();
 dispatch(updateMovie(movieDetails._id, movieDetails));
 
 //setMovieDetails(null);
setMovieDetailModal(false);


 } 

  
  
  const editHandler = (product) => {
		setMovieDetails(product);
		setMovieDetailModal(true);
	};

const handleCloseBookDetailsModal = () => {
		setMovieDetailModal(false);
	};
	
	
  return (
    <div className="App">	



<Table striped style={{ fontSize: 12 }} responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Movie Name</th>
            <th>Rating</th>
            <th>Genre</th>
            <th>Release Date</th>
           <th>Cast</th>
			<th>Edit</th>
			<th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {initial_data.length > 0
            ? initial_data.map((product,index) => (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{product.moviename}</td>
                  <td>{product.rating}</td>
                  <td>{product.genre}</td>
				 
				  <td>{moment(product.releaseDate).format('DD/MM/YYYY')}</td>
				<td>{product.cast}</td>
				  <td><Button 
				  onClick={() => editHandler(product)}
				  variant="primary">Edit</Button></td>
				   <td><Button 
				   onClick={() => deleteHandler(product)}
				   variant="danger">Delete</Button></td>
                </tr>
              ))
            : 'no products'}
        </tbody>
      </Table>

	
	
	<Modal show={movieDetailModal} 
	onHide={handleCloseBookDetailsModal}
	onSubmit={submitUserForm}
	
	>
	  
        <Modal.Header closeButton>
          <Modal.Title>Edit heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
		
		
		
		
		
		<Form>
  <Form.Group className="mb-3" >
    <Form.Label>Movie Name</Form.Label>
    <Form.Control type="type" value={movieDetails ? movieDetails.moviename:''}
		onChange={(e) => setMovieDetails({ ...movieDetails, moviename: e.target.value })}  
	
		
		/>
  </Form.Group>
  
   <Form.Group className="mb-3" >
    <Form.Label>Rating</Form.Label>
    <Form.Control type="type" value={movieDetails ? movieDetails.rating:''}
		onChange={(e) => setMovieDetails({ ...movieDetails, rating: e.target.value })}  
	
		/>
  </Form.Group>


	   <Form.Group className="mb-3" >
    <Form.Label>Genre</Form.Label>
    <Form.Control type="type" value={movieDetails ? movieDetails.genre:''}
	onChange={(e) => setMovieDetails({ ...movieDetails, genre: e.target.value })}  
	
		
		/>
  </Form.Group>
  
  
  
  <Form.Group className="mb-3" >
    <Form.Label>Release Date</Form.Label>

	
    <Form.Control type="type"  value={movieDetails ? moment(movieDetails.releaseDate).format('DD/MM/YYYY'):''}
	onChange={(e) => setMovieDetails({ ...movieDetails, releaseDate: e.target.value })}  
		
		
		readOnly={true}/>
  </Form.Group>
  
  
   <Form.Group className="mb-3" >
    <Form.Label>Cast</Form.Label>
    <Form.Control type="type" value={movieDetails ? movieDetails.cast:''}
	onChange={(e) => setMovieDetails({ ...movieDetails, cast: e.target.value })}  
	
		
		/>
  </Form.Group>
  



  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
		
		</Modal.Body>
      </Modal>

	

    </div>
  );
}

export default SignIn;

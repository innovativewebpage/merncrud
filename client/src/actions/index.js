import axios from "axios";

import { authConstants } from "../constants";

export const insert = (user) => async (dispatch) => {
	//console.log('insert=',user);
	  const res = await axios.post(`/app/movie/create`, {
            ...user
        });
		
		console.log('insert res=',res);
		
		if(res.status === 201){
			
			//console.log('res.data',res.data)
			dispatch({
                type: authConstants.INSERT_SUCCESS,
                payload: res.data.data
            })  
        }
}


export const getInitialData = () => {
  return async (dispatch) => {
    const res = await axios.get(`/app/movie/read`);
	//console.log('res==',res);
	if(res.status === 200){
	 dispatch({
                type: authConstants.INITIAL_SUCCESS,
                payload: res.data,
            });
	}
  };
};






export const deleteProdcut = (id) => async (dispatch) => {
  try {
    const {data} = await axios.delete(`/app/movie/${id}`);
	//console.log('data==',data)
	
	dispatch({ type:authConstants.DELETE_SUCCESS, payload: data });  
  } catch (error) {
   console.log(error.message);
  }
};


export const updateMovie = (id,user) => async (dispatch) => {
	
	
  try {  
const {data} = await axios.put(`/app/movie/${id}`, {
            ...user
        });
		
		//console.log('update data==',data);
		
  dispatch({ type: authConstants.UPDATE_SUCCESS,payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



import { authConstants } from "../constants";

export default function initialReducer(state = [], action) {
	
	
	
		switch(action.type) {
		
		
		case authConstants.INITIAL_SUCCESS:
		return action.payload;
		
		case authConstants.INSERT_SUCCESS:
		return [...state, action.payload];
		
		
		 case authConstants.DELETE_SUCCESS:	
		return state.filter((stat) => stat._id !== action.payload._id);
		
	  
		case authConstants.UPDATE_SUCCESS:	
		return state.map((stat) => (stat._id === action.payload._id ? action.payload : stat));
	
		
	  
	
	
	  
     
	 
	
   default:
		return state;

		}

}





/*const initState = {
    userInfo:[]
};
*/


/*export default (state = initState, action) => {
    //console.log('auth_reducer_action',action);
//console.log('auth_reducers_state',state);
//console.log('auth_reducer_action',action);

    switch (action.type) {
        case authConstants.INITIAL_REQUEST:
            state = {
              loading: true
            }
            break;
        case authConstants.INITIAL_SUCCESS:
            state = {
            loading: false, 
			userInfo: action.payload
            }
            break;
			
			 case authConstants.INITIAL_SUCCESS:
            state = {
            loading: false, 
			userInfo: action.payload
            }
            break;
   

    }
    return state;
}*/
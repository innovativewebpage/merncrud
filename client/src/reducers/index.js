
import { combineReducers } from 'redux';
import  initialReducer from './initialReducers';




const reducer = combineReducers({	
	initial:initialReducer
});

 
 
 export default reducer;

import { combineReducers } from 'redux'
import userdetails from './userdetails';
import products from './products';

export default combineReducers({    
    userdetails,
    products
})
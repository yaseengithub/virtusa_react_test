import axios from 'axios';
import { LOGIN, USERDETAILS, PRODUCTLIST, UPDATEPRODUCT } from './servicesconstants';

export const loginUser = (params) => axios.post(LOGIN, params).then(resp => resp.data);
export const getUserDetails = (params) => axios.get(USERDETAILS, {params}).then(resp => resp.data);
export const getProductList = (params) => axios.get(PRODUCTLIST, {params}).then(resp => resp.data);
export const updateProductItem = (params) => axios.post(UPDATEPRODUCT, params).then(resp => resp.data);


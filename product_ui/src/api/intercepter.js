import axios from 'axios';
//import { toggelLoading } from '../actions/action-types';
import { store } from '../index'
//import { showLoading } from '../utils/utils';

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    //showLoading(true);
    return config;
  }, function (error) {
    //showLoading(false);
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  //showLoading(false);
  return response;
}, function (error) {
  //showLoading(false);
  return Promise.reject(error);
});
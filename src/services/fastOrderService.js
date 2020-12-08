import axios from 'axios'
import qs from 'qs'
import config from '../../config'
/* Constants */
import { TOKEN } from '../utils/constants/itemsLocalStorage'

/* Hooks */
// import useGetItemFromLocalStorage from '../utils/Hooks/useGetItemFromLocalStorage'

const fastOrderService = axios.create({
  baseURL: config.API_URL_SERVER,
  headers: {
    common: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }
})

// using applicattion/x-www-form-urlencoded format
// https://github.com/axios/axios#using-applicationx-www-form-urlencoded-format
fastOrderService.defaults.paramsSerializer = (params) => {
  return qs.stringify(params, { encode: false });
};

// Interceptor request for add token if exist
fastOrderService.interceptors.request.use((config) => {
  const token = window.localStorage.getItem(TOKEN)
  // const [token] = useGetItemFromLocalStorage(TOKEN)

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
})

// Handler for interceptor response error
const isHandlerEnabled = (config = {}) =>{
  // eslint-disable-next-line no-prototype-builtins
  return !(config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled);
};

const errorHandler = (error) => {
  if (isHandlerEnabled(error.config)) {

    if (error.response) {
      /*
       * The request was made and the server responded with a
       * status code that falls out of the range of 2xx
       */
      console.debug('Error fastOrderService', error.response.data);
      console.debug('Error fastOrderService', error.response.status);
      console.debug('Error fastOrderService', error.response.headers);
    } else if (error.request) {
      /*
       * The request was made but no response was received, `error.request`
       * is an instance of XMLHttpRequest in the browser and an instance
       * of http.ClientRequest in Node.js
       */
      console.debug('Error fastOrderService', error.request);
    } else {
      // Something happened in setting up the request and triggered an Error
      console.debug('Error fastOrderService', error.message);
    }
  }

  return error.response;
  //return Promise.reject(error.response)
};

const successHandler = (response) => {
  if (isHandlerEnabled(response.config)) {
    console.log('response fastOrderService', response)
  }
  if (response.status === 401) {
    console.log('Javy response 401:', response);
  }
  return response;
};

fastOrderService.interceptors.response.use((response) => successHandler(response),
  error => errorHandler(error));

export default fastOrderService

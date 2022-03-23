import axios from 'axios';

// Configure axios baseUrl
export const productsListApi = axios.create({
    baseURL: 'https://front-test-api.herokuapp.com/api/product'
});
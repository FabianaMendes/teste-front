import axios from 'axios';

const api = axios.create({
    baseURL: 'http://jrwee.mocklab.io'
});

export default api;
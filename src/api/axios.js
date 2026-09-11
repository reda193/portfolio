import axios from 'axios';

export default axios.create({
    baseURL: 'https://moreda.dev',
    withCredentials: true

});
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3031',
    timeout: 50000,
    headers: {'Content-Type': 'application/json'}
  });

  export default instance;
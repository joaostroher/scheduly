import Axios from 'axios';

const api = Axios.create({
  baseURL: 'http://localhost:3300/api/',
});

export default api;

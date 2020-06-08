import Axios from 'axios';

const api = Axios.create({
  //ORIGINAL - baseURL: 'http://localhost:3300/api/',
  baseURL: 'http://localhost:3000/api/',
});

export default api;

import Axios from 'axios';

const api = Axios.create({
  baseURL: 'http://localhost:3333/api/',
});

export default api;

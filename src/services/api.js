import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://my-json-server.typicode.com/matheuskuster/gostack-rocketshoes-react',
});

export default api;

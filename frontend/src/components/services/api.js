// api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://your-api-base-url', // Replace with your API base URL
});

export default instance;

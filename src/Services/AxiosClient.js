import axios from 'axios';
import { BaseURL } from '../Common/Globals';
const axiosClient = axios.create({
    baseURL: BaseURL,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });

  export default axiosClient;
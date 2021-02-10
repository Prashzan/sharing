import axios from 'axios';
import * as Env from './environments';

const axiosInstance = axios.create({
    baseURL: Env.BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "accept": "application/json"
    }
})
export default axiosInstance;

import axios from 'axios';

const Axios = axios.create({
    baseURL: 'http://localhost:39524',
});

export default Axios;
import axios from 'axios';
import { router } from '../router';

const url = import.meta.env.VITE_APP_REACT_URL;

const axiosClient = axios.create({
    baseURL: url,
    headers: { Accept: 'Application/json', 'Content-Type': 'application/json' },
});

axiosClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('Access_Token');
        config.headers.Authorization = `Bearer ${token}`;

        return config;
    },
    (error) => {},
);

axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            router.navigate('/login');
            return error;
        }

        throw error;
    },
);

export default axiosClient;

import axios from 'axios';

const url = import.meta.env.VITE_APP_REACT_URL;

export const axiosClient = axios.create({
    baseURL: url,
});

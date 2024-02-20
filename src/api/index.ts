import axios, { AxiosInstance } from 'axios';

const apiClient: AxiosInstance = axios.create({
    baseURL: 'https://assessment.spmob.ru/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiClient;

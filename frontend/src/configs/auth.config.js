import axios from 'axios';
import router from '../router';


export function authInterceptors() {
    axios.interceptors.request.use(request => {
        request.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`;
        return request;
    });

    axios.interceptors.response.use(response => response, error => {
        if (error.response.status === 401) {
            router.push('/sign-in');
        }
        return Promise.reject(error);
    });
}
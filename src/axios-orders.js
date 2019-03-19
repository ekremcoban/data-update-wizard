import axios from "axios";

const instance = axios.create({
    baseURL: 'http://sutasiis:8035/duw/',
    // baseURL: 'http://localhost:49157/duw/',
    withCredentials: true
    //'https://jsonplaceholder.typicode.com'
    //'http://sutasiis:8045/'
});

instance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

export default instance;
import axios from "axios";
import config from "Config";

const instance = axios.create({
    baseURL: config.apiURL,
    // baseURL: 'http://sutasiis:8035/duw/',
    // baseURL: 'http://localhost:49157/duw/', //for test --> you have to local (microsoft visual)
    withCredentials: true
    //'https://jsonplaceholder.typicode.com'
    //'http://sutasiis:8045/'
});

instance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

export default instance;
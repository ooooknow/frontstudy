import axios from 'axios'
import promise from 'es6-promise'
import store from '@/store'

promise.polyfill();

console.log(store.getters.authToken);
const service = axios.create({
    baseURL: '/api',
    headers: {'Auth-Token': 'token'}
});

service.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return error;
});

export default service

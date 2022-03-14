import axios from 'axios';
import {appProp} from "../../public/env";

export var Axios = axios.create({
    baseURL: appProp.origin
});

Axios.interceptors.request.use(config => {
    const token = sessionStorage.getItem('ACCESS_TOKEN');
    if (token) {
        config.headers.Authorization = `${token}`;
    }
    return config;
});

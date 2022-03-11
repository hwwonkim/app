import axios from "axios";

axios.interceptors.request.use(config => {
    const token = sessionStorage.getItem('ACCESS_TOKEN');
    if (token) {
        config.headers.Authorization = `${token}`;
    }
    return config;
});

function authentication(userId, password) {
    return axios
        .post(`http://localhost:8180/safety/1.0/auth`, {userId, password})
        .then((res) => res.data);
}

function handleResponseData(resData) {
    if (resData.success) {
        sessionStorage.setItem('ACCESS_TOKEN', resData.data.token);
        return Promise.resolve(resData); //authInfo
    } else if (resData.errCode === 1040 && resData.errorDetails) {
        return Promise.reject({redirectTo: resData.errorDetails, errMsg: resData.errMsg})
    } else {
        return Promise.reject(resData.errMsg);
    }
}

function retrieveUserSenders(sponsorKey, userKey) {
    return axios
        .get(`http://localhost:8180/safety/1.1/sponsors/${sponsorKey}/users/${userKey}/senders`)
        .then(res => res.data);
}

function getUserAuth(sponsorKey){
    if (sponsorKey === undefined) {
        return new Promise(resolve => resolve());
    }
    return axios
        .get(`http://localhost:8180/safety/1.0/auth/${sponsorKey}`)
        .then(res => res.data);
}


export {handleResponseData, authentication, retrieveUserSenders, getUserAuth};
import axios from "axios";

function authentication(userId, password) {
    return axios
        .post(`https://dev-safetyr3-api.crscube.io/safety/1.0/auth`, {userId, password})
        .then((res) => res.data);
}

function handleResponseData(resData) {
    if (resData.success) {
        return Promise.resolve(resData); //authInfo
    } else if (resData.errCode === 1040 && resData.errorDetails) {
        return Promise.reject({redirectTo: resData.errorDetails, errMsg: resData.errMsg})
    } else {
        return Promise.reject(resData.errMsg);
    }
}

export {authentication, handleResponseData};
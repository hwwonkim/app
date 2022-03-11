function handleResponseData(resData) {
    if (resData.success) {
        return Promise.resolve(resData); //authInfo
    } else if (resData.errCode === 1040 && resData.errorDetails) {
        return Promise.reject({redirectTo: resData.errorDetails, errMsg: resData.errMsg})
    } else {
        return Promise.reject(resData.errMsg);
    }
}

export {handleResponseData};
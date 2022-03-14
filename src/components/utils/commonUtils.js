export {getOrDefault, isBlank};

function getOrDefault(value, defaultValue){
    return value === undefined || value === null ? defaultValue : value;
}

function isBlank(value){
    return value === undefined || value === null || value.trim() === undefined || value === '';
}


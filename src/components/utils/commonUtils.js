export {getOrDefault};

function getOrDefault(value, defaultValue){
    return value === undefined || value === null ? defaultValue : value;
}
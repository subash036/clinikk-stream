let IsJsonString = (str)=> {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
};
module.exports = {
    
    success: (response, serverResponse, statusCode = 200) => {
        return response.status(statusCode).json(serverResponse);
    },
    error: (response, statusCode, message) => {
        let _self=this;
        console.log("🚀 ~ file: response.js ~ line 15 ~ _self", _self)
        return response.status(statusCode).json({
            code: statusCode,
            error: IsJsonString(message)?message:message.toString()
        });
    },
    dbError: (response, statusCode, message) => {
        return response.status(statusCode).json({
            code: statusCode,
            error: message.errors
        });
    },
    
}

export const errHandler = (statusCode, message) => {
    const err = new Error(message);
    err.statusCode = statusCode;
    err.message = message;
    return err;
}
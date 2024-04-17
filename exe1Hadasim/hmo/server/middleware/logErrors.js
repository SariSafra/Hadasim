

export const logErrors = (error, req, res, next) => {
    const statusCode = error && error.hasOwnProperty("statusCode") ? error.statusCode : 500;
    const message = error && error.hasOwnProperty("message") ? error.message : '';
    
    // Log error details including request information
    console.error(`Error: ${message}`);
    console.error(`Status Code: ${statusCode}`);
    console.error(`Request URL: ${req.originalUrl}`);
    console.error(`Request Method: ${req.method}`);
    console.error(`Request Headers: ${JSON.stringify(req.headers)}`);
    
    // Send an appropriate error response to the client
    return res.status(statusCode).json({ error: errMessageForClient(statusCode, message) });
}

function errMessageForClient(statusCode) {
    switch (statusCode) {
        case 400:
            return 'Invalid request parameters';
        case 401:
            return 'Authorization required';
        case 404:
            return 'Not found';
        case 500:
            return 'Internal Server Error';
        default:
            return 'Something went wrong!';
    }
}


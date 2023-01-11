import { StatusCodes } from "http-status-codes"

/* All the errors caught from authController.js will be handled here

*/
const errorHandlerMiddleware = (err, req, res, next) => {
    console.log(err)

    //These error starting here is error from controller
    const defaultError = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'Something went wrong, try again later',
    }

    //These errors from here below are database error
    //if the user has validation error: missing field
    if (err.name === "ValidationError"){
        defaultError.statusCode = StatusCodes.BAD_REQUEST

        //iterate through all errors and combine its error messages
        defaultError.msg = Object.values(err.errors)
            .map((item) => item.message)
            .join(', ')
    }
    if (err.code && err.code === 11000){
        defaultError.statusCode = StatusCodes.BAD_REQUEST
        defaultError.msg = `${Object.keys(err.keyValue)} has to be unique`
    }
    //response send a json object: https://www.geeksforgeeks.org/express-js-res-json-function/
    //res.status(defaultError.statusCode).json({msg: err})       //uncomment this to receive the json data of err
    res.status(defaultError.statusCode).json({msg: defaultError.msg})
}

export default errorHandlerMiddleware
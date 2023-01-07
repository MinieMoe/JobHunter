const errorHandlerMiddleware = (err, req, res, next) => {
    console.log(err)

    //response send a json object
    res.status(500).json({msg:'There was an error'})
}

export default errorHandlerMiddleware
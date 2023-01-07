const notFoundMiddleWare = (res, req) =>{
    res.status(404).send('Route does not exist')
}

export default notFoundMiddleWare
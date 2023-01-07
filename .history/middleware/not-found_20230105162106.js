const notFoundMiddleWare = (req, req) =>{
    res.status(404).send('Route does not exist')
}

export default notFoundMiddleWare
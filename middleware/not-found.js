//the order of (req, res) matters. Otherwise, it won't run

const notFoundMiddleware = (req, res) =>{
    res.status(404).send('Route does not exist')
}

export default notFoundMiddleware
//the order of (req, res) matters. Otherwise, it won't run
const notFoundMiddleWare = (req, res) =>{
    res.status(404).send('Route does not exist')
}

export default notFoundMiddleWare
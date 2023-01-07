import express from 'express'
const app = express()

//middlewares
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'

app.get('/', (req, res) => {
    res.send('Welcome!')
})

//put this last...after express checks all of the possible routes above...
//...and can't find a matching one, then it will execute this code below
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

app.listen(port, () =>{
    console.log(`Server is listening on port ${port}...`)
})
import express from 'express'
const app = express()
import dotenv from'dotenv'
dotenv.config()

//db and authenticateUser
import connectDB from './db/connect.js'

//routers
import authRouter from 
//middlewares
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'

app.get('/', (req, res) => {
    // throw new Error('testing error')
    res.send('Welcome!')
})

/*put this last...after express checks all of the possible routes above...
...and can't find a matching one, then it will execute this code below*/
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

//connectDB use mongoose.connect(), which returns a Promise, therefore, use async/await
const start = async () => {
    try{
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () =>{
            console.log(`Server is listening on port ${port}...`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()
import express from 'express'
const app = express()
import dotenv from'dotenv'
dotenv.config()
import 'express-async-errors'


//db and authenticateUSer
import connectDB from './db/connect.js'

//routers
import authRouter from './routes/authRoutes.js'
import jobsRouter from './routes/jobsRoutes.js'

//middlewares
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'

//Very important: use json middleware to get resquest & response as json object to extract info
app.use(express.json())

app.get('/', (req, res) => {
    // throw new Error('testing error')
    res.send('Welcome!')
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobsRouter)

/*put this code last...after express checks all of the possible routes above...
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
import express from 'express'
const app = express()

//middlewares
import notFoundMiddleWare from './middleware/not-found.js'

app.get('/', (req, res) => {
    res.send('Welcome!')
})

//put this last...after express checks all of the possible routes above...
//...and can't find a matching one, then 
app.use(notFoundMiddleWare)

const port = process.env.PORT || 5000

app.listen(port, () =>{
    console.log(`Server is listening on port ${port}...`)
})
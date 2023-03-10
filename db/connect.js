import mongoose from 'mongoose'

//url: connection string from MongoDB
//mongoose.connect(): return a Promise, so we have to use async
const connectDB = (url) =>{
    return mongoose.connect(url)
}

export default connectDB
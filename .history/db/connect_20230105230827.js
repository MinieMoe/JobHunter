import mongoose from 'mongoose'

//url: connection string from MongoDB
//mongoose.connect(): return a Promise
const connectDB = (url) =>{
    return mongoose.connect(url)
}

export default connectDB
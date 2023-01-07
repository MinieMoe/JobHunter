import mongoose from 'mongoose'

//url: connection string from MongoDB

const connectDB = (url) =>{
    return mongoose.connect(url)
}

export default connectDB
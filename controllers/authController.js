//controllers: callback function for the corresponding router
import { StatusCodes } from "http-status-codes"
import User from "../models/User.js"
import { BadRequestError, NotFoundError } from "../errors/index.js"


//what to do when the user is routed to /register page
const register = async (req, res) =>{
    
    /* 
        user send a request to create a new User/account 
        req.body carries the JSON data to extract from and put into DB
        if succeed, send back a response with success status with jpon object of the user just created

        catching error: if the data user send is not valid. ex: name is not long enough, email is not unique
        ...we will catch error. All the error will be passed down to the error-handler middleware in server.js
        ...so that the error can be processed there 
    */

    const { name, email, password } = req.body

    if(!name || !email || !password){
        throw new BadRequestError('please provide all values')
    }

    const userAlreadyExist = await User.findOne({email})
    if(userAlreadyExist){
        throw new BadRequestError('Email already in use')
    }
    
    const user = await User.create({ name, email, password })
    res.status(StatusCodes.CREATED).json({user})
}

//what to do when the user is routed to /login page
const login = async (req, res) =>{
    res.send('login user')
}

//what to do when the user is routed to /updateUser page
const updateUser = async (req, res) =>{
    res.send('update user')
}

export { register, login, updateUser }

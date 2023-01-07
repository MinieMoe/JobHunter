//controllers: callback function for the corresponding router
//what to do when the user is routed to /register page
const register = (req, res) =>{
    res.send('register user')
}

//what to do when the user is routed to /login page
const login = (req, res) =>{
    res.send('login user')
}

//what to do when the user is routed to /updateUser page
const updateUser = (req, res) =>{
    res.send('update user')
}

export { register, login, updateUser }

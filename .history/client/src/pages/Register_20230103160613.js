import { useState, useEffect } from "react";
import { Logo } from '../components'
import Wrapper from "../assets/wrappers/RegisterPage";

//user object to keep track of user register info
const initialState = {
    name:'',
    email:'',
    password:'',
    isMember: true,
}

const Register = () =>{
    const [values, setValues] = useState(initialState)
    
    const handleChange = (e) =>{

    }

    return <Wrapper>
        Register</Wrapper>
}

export default Register
import { useState, useEffect } from "react";
import { Logo } from '../components'
import Wrapper from "../assets/wrappers/RegisterPage";

const initialState = {
    name:'',
    email:'',
    password:'',
    isMember: true,
}

const Register = () =>{
    const [values, setValues] = useState(initialState)
    
    return (
        
    );
}

export default Register
import { useState, useEffect } from "react";
import { Logo } from "../components";
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

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return <Wrapper className='full-page'>
        <form className ='form' onSubmit={onSubmit}>
            <Logo/>
            <h3>Login</h3>
            <div class="form-row">
                <label htmlFor="name" className="form-label">
                    name
                </label>
                <input type="text" value ={name}name="name" id="name"/>
            </div>
        </form>
    </Wrapper>
}

export default Register
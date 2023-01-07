import { useState, useEffect } from "react";
import { Logo, FormRow, Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useAppContext } from "../context/action";

//user object to keep track of user register info
const initialState = {
    name:'',
    email:'',
    password:'',
    isMember: true,
    showAlert: false,
}

const Register = () =>{
    const [values, setValues] = useState(initialState)
    const {isLo}
    const handleChange = (e) =>{
        
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }

    const toggleMember = () => {
        setValues({...values, isMember: !values.isMember})
    }

    return <Wrapper className='full-page'>
        <form className ='form' onSubmit={onSubmit}>
            <Logo/>
            <h3>{values.isMember? 'Login':'Register'}</h3>
            {values.showAlert && <Alert/>}

            {/* name input */}
            {!values.isMember && (
                <FormRow
                    type = "text"
                    name = "name"
                    value = {values.name}
                    onChange = {handleChange}
                />
            )}
             {/* email input */}
            <FormRow
                type = "email"
                name = "email"
                value = {values.email}
                onChange = {handleChange}
            />
            {/* password input */}
            <FormRow
                type = "password"
                name = "password"
                value = {values.password}
                onChange = {handleChange}
            />
            <button type='submit' className='btn btn-block'>submit</button>
            <p>
                {values.isMember? 'Not a member yet?' : 'Already a member?'}
           
                <button type="button" onClick={toggleMember} className="member-btn">
                    {values.isMember? 'Login':'Register'}
                </button>
            </p>

        </form>
    </Wrapper>
}

export default Register
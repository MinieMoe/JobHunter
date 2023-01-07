import { useState, useEffect } from "react";
import { Logo, FormRow, Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useAppContext } from "../context/appContext";

//user object to keep track of user register info
const initialState = {
    name:'',
    email:'',
    password:'',
    isMember: true,
}

const Register = () =>{
    const [values, setValues] = useState(initialState)
    const {isLoading, showAlert} = useAppContext()

    const handleChange = (e) =>{
        setValues({...values, [e.target.value]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }

    const toggleMember = () => {
        setValues({...values, isMember: !values.isMember})
    }

    return (
    <Wrapper className='full-page'>
        <form className ='form' onSubmit={onSubmit}>
            <Logo/>
            <h3>{values.isMember? 'Login':'Register'}</h3>
            {showAlert && <Alert/>}

            {/* name input */}
            {!values.isMember && (
                <div className="form-row">
                <label htmlFor={values.name} className="form-label">
                    {labelText || name}
                </label>
                
                <input 
                    type='text'
                    value ={values.name} 
                    name='name' 
                    onChange={handleChange}
                    className ="form-input"
                />
            </div>
            )}
             {/* email input */}
            <FormRow
                type = 'email'
                name = 'email'
                value = {values.email}
                handleChange = {handleChange}
            />
            {/* password input */}
            <FormRow
                type = 'password'
                name = 'password'
                value = {values.password}
                handleChange = {handleChange}
            />
            <button type='submit' className='btn btn-block'>submit</button>
            <p>
                {values.isMember? 'Not a member yet?' : 'Already a member?'}
           
                <button type='button' onClick={toggleMember} className='member-btn'>
                    {values.isMember? 'Login':'Register'}
                </button>
            </p>

        </form>
    </Wrapper>
    )
}

export default Register
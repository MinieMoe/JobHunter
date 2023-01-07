import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
import React from 'react'
import Wrapper from '../assets/wrappers/LandingPage'
import { Link } from 'react-router-dom'
import { Logo } from '../components'

const Landing = () => {
  return(
    <Wrapper>
      <nav>
        <Logo/>
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I just wanna get a job
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
      </div>
    </Wrapper>
  )
}
export default Landing;

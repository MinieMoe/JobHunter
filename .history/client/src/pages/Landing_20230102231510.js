import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
import React from 'react'
import Wrapper from '../assets/wrappers/LandingPage'
import {}

const Landing = () => {
  return(
    <Wrapper>
      <nav>
        <img src={logo} alt="jobify" className='logo'/>
      </nav>
      <div className='container_page'>
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I just wanna get a job
          </p>
          <button className='btn btn-hero'>
            Login/Register
          </button>
          <img src={main} alt="job hunt" className='img main-img'/>
        </div>
      </div>
    </Wrapper>
  )
}
export default Landing;

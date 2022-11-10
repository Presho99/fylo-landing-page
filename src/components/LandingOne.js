import React from 'react'
import "../assets/index.css"

function LandingOne() {
  return (
    <div className='one'>
        <div className='one-text'>
            <h2 className='one-title'>All your files in one secure <br/> location, accessible anywhere.</h2>
            <p className='one-content'>
                Fylo stores your most important files in one secure location. Access <br/> them wherever you need, share and collaborate with friends, family, <br/> and co-workers.
            </p>
            <form className='one-form'>
                <input type="email" placeholder='Enter your email...'/>
                <button className='one-btn'>Get Started</button>
            </form>
        </div>

        <div className='one-image'>
            <img src="../images/illustration-1.svg"/>
        </div>
    </div>
  )
}

export default LandingOne
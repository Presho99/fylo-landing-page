import React from 'react'
import "../assets/index.css"

function LandingThree() {
  return (
    <div className='three'>
        <div className='three-text'>
            <h3 className='three-title'>Get early access today</h3>
            <p className='three-p'>
                It only takes a minute to sign up and our free starter tier is <br/> extremely gorgeous. If you have any questions, our support team <br/> would be happy to help you.
            </p>
        </div>
        <div className='three-form'>
            <form>
                <input type="email" placeholder="Enter email"/>
                <button className='three-btn'>Get Started For Free</button>
            </form>
        </div>
    </div>
  )
}

export default LandingThree
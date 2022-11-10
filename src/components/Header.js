import React from 'react'
import "../assets/index.css"

function Header() {
    return (
        <div className='header'>
            <div className='logo'>
                <img src='../images/logo.svg' />
            </div>
            <div className='navbar'>
               
                    <p>Features</p>
                    <p>Team</p>
                    <p>Sign In</p>
          
            </div>
        </div>
    )
}

export default Header
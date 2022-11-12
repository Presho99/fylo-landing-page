import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-solid-svg-icons'
import "../assets/index.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src='../images/logo.svg'/>
        </div>
        <div className='footer-details'>
            <div className='contact'>
                <div className='tel'>
                    <img src="../images/icon-phone.svg"/>
                    <p>Phone: +1-543-123-4567</p>
                </div>
                <div className='tel'>
                    <img src="../images/icon-email.svg"/>
                    <p>example@fylo.com</p>
                </div>
            </div>
            <div className='first-links'>
               <p>About Us</p>
               <p>Jobs</p>
               <p>Press</p>
               <p>Blog</p>
            </div>
            <div className='second-links'>
                <p>Contact Us</p>
                <p>Terms</p>
                <p>Privacy</p>
            </div>
            <div className='socials'>
                <div className='circle'>
                
                </div>
                <div className='circle'></div>
                <div className='circle'></div>
            </div>
        </div>
    </div>
  )
}

export default Footer
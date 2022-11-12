import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'


function LandingTwo() {
    return (
        <div className='two'>
            <div className='two-text'>
                <h2 className='two-title'>Stay productive, where you are</h2>
                <p>Never let location be an issue when accessing your files. Fylo has you <br /> covered for all your file storage needs.</p>
                <p>Securely share files and folders with friends, family and colleagues for <br /> live collaboration. No email attachments required!</p>
                <div className='fylo-link'>
                    <p>See how Fylo works</p>
                    <FontAwesomeIcon icon={faCircleArrowRight} />
                </div>
                <div className='two-review'>
                    <h3></h3>
                    <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                    <div className='two-author'>
                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400" />
                        <div className='author-details'>
                            <h4>Kyle Burton</h4>
                            <p>Founder & CEO, Huddle</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='two-image'>
                <img src="../images/illustration-2.svg"/>
            </div>

        </div>
    )
}

export default LandingTwo
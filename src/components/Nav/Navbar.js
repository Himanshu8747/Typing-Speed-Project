import React from 'react'
import logo from '../../assets/logo.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className="nav-left">
                <img className='flash-logo' src={logo} alt="logo" />
                <p className="flash-logo-text">FlashType</p>
            </div>
            <div className="mar-right">
                {/* <a
                    target="_blank"
                    className='nav-link'
                    href=''
                    rel='noreferrer'>
                    Himanshu
                </a> */}
            </div>
        </div>
    )
}

export default Navbar
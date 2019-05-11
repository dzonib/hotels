import React, { useState } from 'react'
import logo from '../images/logo.svg'
import { FaAlignRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [toggle, setToggle] = useState(false)

    return (
        <nav className='navbar'>
            <div className='nav-center'>
                <div className='nav-header'>
                    <Link to='/'>
                        <img src={logo} alt='Dream Hotel' />
                    </Link>
                    <button
                        type='button'
                        className='nav-btn'
                        onClick={() => setToggle(!toggle)}
                    >
                        <FaAlignRight className='nav-icon' />
                    </button>
                </div>
                <ul className={toggle ? "nav-links show-nav" : "nav-links"}>
                    <li>
                        <Link to="/">Home</Link>
                        <Link to="/rooms">Rooms</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

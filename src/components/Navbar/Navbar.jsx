import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ children }) => {
    const [isMobile, setIsMobile] = useState(false);
    return (
        <>
            <nav className='navbar'>
                <h3 className='navbar__logo'>sandov</h3>
                <ul className={isMobile ? "navbar__links-mobile" : "navbar__links"}
                    onClick={() => setIsMobile( false )}
                >
                    <Link to="/" className='home'>
                        <li>Home</li>
                    </Link>
                    <Link to="/about" className='about'>
                        <li>About</li>
                    </Link>
                    <Link to="/skills" className='skills'>
                        <li>Skills</li>
                    </Link>
                    <Link to="/contact" className='contact'>
                        <li>Contact</li>
                    </Link>
                    <Link to="/signup" className='signup'>
                        <li>Sign Up</li>
                    </Link>

                </ul>
                <button className="mobile-menu-icon"
                    onClick={() => setIsMobile(!isMobile)}
                >
                    {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
                </button>

            </nav>
            {children}
        </>
    )
}

export default Navbar;
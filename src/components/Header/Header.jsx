import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header-container'>
            <nav className='nav_container'>
                <h3>Programming Knowledge</h3>
                <div className='nav-items'>
                    <a href="/home">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;
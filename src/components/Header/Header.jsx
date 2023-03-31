import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className='nav_container'>
                <h3>Knowledge Cafe</h3>
                <img className='rounded-circle img-fluid' src="../../../public/images/md_farid.png" alt="" />
            </nav>
        </div>
    );
};

export default Header;
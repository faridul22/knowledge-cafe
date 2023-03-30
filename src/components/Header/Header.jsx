import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className='nav_container mt-3 container pt-2'>
                <h3>Knowledge Cafe</h3>
                <img className='rounded-circle img-fluid' src="../../../public/images/md_farid.png" alt="" />
            </nav>
            <hr className='container' />
        </div>
    );
};

export default Header;
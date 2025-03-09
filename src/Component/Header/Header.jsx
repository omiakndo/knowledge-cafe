import React from 'react';
import './Header.css'


const Header = () => {
    return (
       <div>
         <div className='header'>
             <h1 className='header-title'>Knowledge Cafe</h1>
             <img className='img' src="/images/profile.png" alt="" />
        </div>
        <hr className='hr' />
       </div>
    );
};

export default Header;
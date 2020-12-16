import React from 'react'
import './Header.css'

const Header = ({ text }) => {
    return (
        <div className='header'>
            <h1>{text}</h1>
        </div>
    );
}

export default Header
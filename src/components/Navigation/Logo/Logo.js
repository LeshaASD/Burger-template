import React from 'react';
import logo from '../../../assets/logo-sk.png';
import {Link} from 'react-router-dom';

const Logo = () => {
    return (
        <div className='Logo'>
            <Link to='/home'><img src={logo} alt=""/></Link>
        </div>
    )
};

export default Logo;
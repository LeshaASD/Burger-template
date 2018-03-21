import React from 'react';
import './UnderMenu.css';
import {Link} from 'react-router-dom';
import logo from '../../../../assets/img/forbes-life-logo-white.svg';
import facebook from '../../../../assets/img/facebook.png'
import vk from '../../../../assets/img/vk.png';
import telegram from '../../../../assets/img/telegram.png';
import twitter from '../../../../assets/img/tvitter.png';

const UnderMenu = () => {
   return (
       <div className='under-menu'>
           <Link to='/'><img src={logo} width="250px" height="80px"/></Link>
            <div className='social-links'>
                <a href="http://facebook.com"><img src={facebook}/></a>
                <a href="http://vk.com"><img src={vk} alt=""/></a>
                <a href="http://twitter.com"><img src={twitter}/></a>
                <a href="http://telegram.com"><img src={telegram} alt=""/></a>
            </div>
       </div>
   )
};

export default UnderMenu;

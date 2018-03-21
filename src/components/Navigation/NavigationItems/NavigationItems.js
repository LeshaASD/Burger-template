import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavigationItems.css';

const NavigationItems = () => {
    return (
        <div>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <NavLink to='/pages/home' activeClassName='active-Link' className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName='active-Link' to='/pages/news'>News</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" activeClassName='active-Link' to='/pages/community'>Community</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/pages/publishers' activeClassName='active-Link' className="nav-link">Publishers</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/pages/countries' activeClassName='active-Link' className="nav-link">Around the world</NavLink>
                </li>
            </ul>
        </div>
    )
};

export default NavigationItems;
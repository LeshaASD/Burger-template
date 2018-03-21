import React from 'react';
import './Toolbar.css';
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../Logo/Logo";

const Toolbar = () => {
    return (
        <header className='Toolbar'>
            <div>
                <Logo/>
            </div>
            <nav>
                <NavigationItems/>
            </nav>
        </header>
    )
};

export default Toolbar;
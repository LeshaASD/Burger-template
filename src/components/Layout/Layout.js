import React, {Fragment} from 'react';
import './Layout.css';
import Toolbar from "../Navigation/Toolbar/Toolbar";


const Layout = props => {
    return (
        <Fragment>
            <Toolbar />
            <main className='Layout-Content'>
                {props.children}
            </main>
        </Fragment>
    )
};

export default Layout;
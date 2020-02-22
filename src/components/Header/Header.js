import React from 'react';
//import $ from 'jquery';
import Nav from './Nav';
import logo from "./greenworld.png";


const Header = ({onRouteChange}) => {
    return(
        <div>
            <nav className="navbig pa3 pa4-ns tc">
                <p className="d-inline green pointer b f1 f-subheadline-m f-6-l tc db mt4" title="Home" onClick={()=>onRouteChange("Home")}>
                    <img className="d-none d-md-inline w-10 mw4" src={logo} alt='logo'/> Green World</p>
                <Nav onRouteChange={onRouteChange}/>
            </nav>
        </div>
    )
}

export default Header;
import React from 'react';
//import $ from 'jquery';
import Nav from './Nav';
import logo from "./greenworld.png";


const Header = ({onRouteChange}) => {
    return(
        <div>
            <nav className="navbig pa3 pa4-ns tc">
                <p className="d-inline green pointer b f1 f-headline-ns tc db mt4" title="Home" onClick={()=>onRouteChange("Home")}>
                    <img className="d-md-none d-lg-inline" width="100px" src={logo} alt='logo'/> Green World</p>
                <Nav onRouteChange={onRouteChange}/>
            </nav>
        </div>
    )
}

export default Header;
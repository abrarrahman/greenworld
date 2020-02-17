import React from 'react';
import './Nav.css'
//import $ from 'jquery';

const Nav = ({onRouteChange}) => {
    return(
        <div className="navfixed bg-white tc pt2">
            <p className="link  link hover-green gray f6 f5-ns dib mr3" onClick={()=>onRouteChange("Home")} title="Home">Home</p>
            <p className="link  link hover-green gray f6 f5-ns dib mr3" onClick={()=>onRouteChange("About")} title="About">About</p>
            <p className="link  link hover-green gray f6 f5-ns dib mr3" onClick={()=>onRouteChange("Products")} title="Products">Products</p>
            <p className="link  link hover-green gray f6 f5-ns dib" onClick={()=>onRouteChange("Contact")} title="Contact">Contact</p>
        </div>
    )
}

export default Nav;
import React from "react";
import { BrowserRouter, NavLink} from "react-router-dom";



const pages = [{link: "/",label: "Home",},
{link: "/serverinfo",label: "Server Info",},
{link: "/controlpanel",label: "Control Panel",},
{link: "/forum",label: "Forum",},
{link: "/downloads",label: "Downloads",},];

const Header = () => {
    return(
        <div className="navbar fixed-top navbar-light">
        <div className="container-lg">
        {pages.map((element, index) => 
            <NavLink to={element.link} key={index} className={({ isActive }) => {
                if(isActive){return "fill item active"}else{return "fill item"}
            }}>
            {element.label}
            </NavLink>
            )}
            </div>
            </div>
            );
        };
        
        export default Header;
        
        
        
        
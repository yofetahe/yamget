import React, { useState } from 'react'

import MenuLink from './MenuLink';
import './header.css';
import logo from '../../assets/yamget_logo.png';
import MenuOpen from '../../assets/menu_open.png';
import MenuClose from '../../assets/menu_close.png';

function Menu() {

    var menuLinks = [
        { id: 1, page: "Clients", location:"#clients" },
        { id: 2, page: "What we do", location:"#what-we-do" },
        { id: 3, page: "About Us", location:"#about-us" },
        { id: 4, page: "Products", location:"#products" },
        { id: 5, page: "Contact Us", location:"#contact-us" },
    ];

    var [ isMenuOpen, setMenuOpen ] = useState(false);

    function openMenu() {
        setMenuOpen(!isMenuOpen);
    }

    const handleMenuClose = (pageType) => {
        if(pageType === "smallDevices") {
            setMenuOpen(!isMenuOpen);
        }
    }

    return (
        <div className="Menu">
            <div className="Content">
                <div className="LogoContent">
                    <a href="/"><img src={logo} className="Logo" alt="logo" /></a> <span className="OrgName">YamGet</span>
                </div>
                <div className="MenuLinks">
                    {menuLinks.map(link => <MenuLink key={link.id} link={link} handleMenuClose={handleMenuClose} pageType="largeDevices"/>)}
                </div>
                <div className="MenuBar">
                    <img src={MenuOpen} alt="Open" onClick={openMenu} 
                        className={isMenuOpen ? "hideMenuIcon" : "viewMenuIcon"} />
                    <img src={MenuClose} alt="Close" onClick={openMenu} 
                        className={isMenuOpen ? "viewMenuIcon" : "hideMenuIcon"} />
                </div>
            </div>
            { isMenuOpen && 
                <div className="VerticalMenu">
                    {menuLinks.map(link => <MenuLink key={link.id} link={link} handleMenuClose={handleMenuClose} pageType="smallDevices"/>)}
                </div> }
        </div>
    )
}

export default Menu;
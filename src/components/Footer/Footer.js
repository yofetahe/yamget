import React from 'react'

import logo from '../../assets/yamget_logo.png';
import './footer.css';

function Footer() {
    return (
        <div className="Footer">
            <div className="Content">
                <div className="FooterLogoContent">
                    <div className="FooterLogo">
                    <img src={logo} alt="logo" /> 
                    </div>
                    <div className="FooterOrgName">YamGet</div>
                </div>
                <div className="CopyRight">
                    &copy; 2020, Powered by YamGet IT Solution PLC.
                </div>
            </div>
        </div>
    )
}

export default Footer;
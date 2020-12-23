import React, { Component } from 'react'

import Menu from './Menu';
import './header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                {/* <Menu /> */}
                <div className="headerContent">
                    <div className="Content">
                        <div className="Slogan">
                            <span>Quality</span> is never an accident.
                        </div>
                        <div className="SloganReason">
                            It is always the result of high intention, sincere effort, intelligent direction, skillful execution and 
                            wise choice of many alternatives.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
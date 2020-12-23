import React from 'react'

import './header.css';

function MenuLink(props) {
    return (
        <div className="Link">
            <a href={props.link.location} onClick={()=>props.handleMenuClose(props.pageType)}>{props.link.page}</a>
        </div>
    )
}

export default  MenuLink;
import React from 'react'

import './workedWith.css';

function Organization(props) {
    return (
        <div className="Organization">
            <img src={props.orgInfo.logo} alt="OrgLogo"/>
        </div>
    )
}

export default Organization;
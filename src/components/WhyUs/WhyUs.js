import React from 'react'

function WhyUs(props) {
    return (
        <div className="WhyUsDescription">
            <div className="DescriptionTitle">{props.content.title}</div>
            <div className="DescriptionContent">{props.content.content}</div>
        </div>
    )
}

export default WhyUs;
import React from 'react'

function Work(props) {
    return (
        <div className="Service">
            <img src={props.service.icon} alt="ServiceIcon"/>
            <div className="ServiceTitle">
                {props.service.title}
            </div>
            <div className="ServiceDescription">
                {props.service.description}
            </div>
        </div>
    )
}

export default Work;
import React from 'react'

import './projects.css';

function Project(props) {
    return (
        <div className="Project">
            <img src={props.project.icon} alt="ProjectIcon"/>
            <div className="ProjectTitle">
                {props.project.title}
            </div>
            <div className="ProjectDescription">   
                {props.project.description}
            </div>
        </div>
    )
}

export default Project;
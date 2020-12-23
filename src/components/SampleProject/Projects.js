import React from 'react'
import Project from './Project';
import './projects.css';

import SMS from '../../assets/projects_image/sms.png';
import TMS from '../../assets/projects_image/tms.png';
import BAS from '../../assets/projects_image/bas.png';
import PMS from '../../assets/projects_image/pms.png';

function Projects() {
    const projects = [
        { id: 1, title: "SMS", icon: SMS, description: "Transform your school", link: "link" },
        { id: 2, title: "FMS", icon: TMS, description: "Manage your freight transaction and movement", link: "link" },
        { id: 3, title: "BRMS", icon: BAS, description: "Ease building rental process", link: "link" },
        { id: 4, title: "HBLMS", icon: PMS, description: "Control the health office licensing process", link: "link" },
    ];
    return (
        <div className="Projects" id="products">
            <div className="Title1">Check out our latest work</div>
            <div className="Title2">Our Recent Projects</div>
            <div className="Content">
                { projects.map(proj => <Project key={proj.id} project={proj} />) }
            </div>
        </div>
    )
}

export default Projects;
import React from 'react'

import Organization from './Organization';

import Everest from '../../assets/company_logo/everest.png';
import Champion from '../../assets/company_logo/champions-acadamy.png';
import Ethiopia from '../../assets/company_logo/Ethiopia.png';
import FGA from '../../assets/company_logo/family_guidance_association.png';
import './workedWith.css';

function WorkedWith() {
    const organizations = [
        { id: 1, name: "Everest", logo: Everest },
        { id: 2, name: "Champion", logo: Champion },
        { id: 3, name: "Ethiopia", logo: Ethiopia },
        { id: 4, name: "FGA", logo: FGA },
    ];
    return (
        <div className="WorkedWith" id="clients">
            WE'VE BEEN TRUSTED BY
            <div className="OrganizationList">
                { organizations.map(org => <Organization key={org.id} orgInfo={org} />) }
            </div>
        </div>
    )
}

export default WorkedWith;
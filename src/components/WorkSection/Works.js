import React from 'react'

import Work from './Work';

import Software from '../../assets/services_image/software_dev.png';
import Hardware from '../../assets/services_image/hardware_maintenance.png';
import GraphicsDesign from '../../assets/services_image/graphics-design.png';
import PaperPrinting from '../../assets/services_image/paper-printing.png';
import DigitalPrinting from '../../assets/services_image/digital-printing.png';
import NetworkInstallation from '../../assets/services_image/network-installation.png';

import './works.css';

function Works() {
    const services = [
        {
            id: 1,
            title: "App and Website Development", 
            icon: Software, 
            description: "From a simple online application to a complex corporate solution starting from the initial idea through full release of the product. Enhance or redesign your existing website or develop a new stunning and effective website."
        },
        {
            id: 2,
            title: "Hardware Maintenance", 
            icon: Hardware, 
            description: "Taking care of the computer's physical components, such as its keyboard, hard drive and internal CD or DVD drives. Cleaning the computer, keeping its fans free from dust, and defragmenting its hard drives. Beside this prints, fax and photocopy machine."
        },
        {
            id: 3,
            title: "Network Installation", 
            icon: NetworkInstallation, 
            description: "Upgrade an existing network or design and install a new one. Our services include computer and wireless network installation and support, Mobile device support, server installation and support, consultation on hardware and software purchasing and installation."
        },
        {
            id: 4,
            title: "Graphics Designing", 
            icon: GraphicsDesign, 
            description: "Visual compositions of ideas to solve problems and communicate it through typography, imagery, color and form."
        },
        {
            id: 5,
            title: "Large Format Printing", 
            icon: PaperPrinting, 
            description: "Large signage - billboards, posters, vinyl banners, Wallpaper and murals, Laminating"
        },
        {
            id: 6,
            title: "Digital and Screen Printing", 
            icon: DigitalPrinting, 
            description: "Posters and signage labels, menus and letters, logos, graphics onto clothes, Fabric banners"
        },
    ]
    return (
        <div className="Content WorkSection" id="what-we-do">
            <div className="Title">Here's what we do.</div>
            <div className="SectionDescription">
                Let our team become your partner in revolutionizing your business through the power of using innovative technologies and ideas to bring a better quality in your work process.
            </div>
            <div>
                { services.map(service => <Work key={service.id} service={service} />) }
            </div>
        </div>
    )
}

export default Works;
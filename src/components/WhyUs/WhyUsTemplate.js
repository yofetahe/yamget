import React from 'react'

import WhyUs from './WhyUs';

import './whyUs.css';

function WhyUsTemplate() {
    const whyUsContent = [
        {id: 1, title: "Commitment to Quality", content: "We never stop improving our services, including development methodologies, engineering practices and management techniques to enhance our team's capabilities and increase customer satisfaction. we are a team that takes pride in what we have done and looks forever forward to what we'll do. We are very passinate to make great things and see amazing results."},
        {id: 2, title: "Experience and Expertise", content: "We are very energetic team with a diversified background, an average of seven years of experience in software development and hardware maintenance. Previously all the team members were working with in various business sectors on different projects. With our broad technical experities we can solve problems using practical and appropraite tool sets."},
        {id: 3, title: "Customer Focused", content: "We understand that the success of every project depends on effective communication and clearly understand the clients specific objectives and needs; therefore, we make it our business to understand and adjust ourselves according to the client's project requirment to offer our clients technology solutions that add real value to their business."},
        {id: 4, title: "Reliable Support", content: "We provide a realiable technical support and maintenance to ensure that the delivered product runs smoothly and in full accordance with its clients' requirments."},
    ];

    return (
        <div className="WhyUs">
            <div className="SectionTitle">Why Us?</div>
            <div className="Content">
                {whyUsContent.map(content => <WhyUs key={content.id} content={content} />)}
            </div>
        </div>
    )
}

export default WhyUsTemplate;
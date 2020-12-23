import React from 'react';

import './landingPage.css';

import Menu from './Header/Menu';
import Header from './Header/Header';
import WorkedWith from './WorkedWith/WorkedWith';
import Works from './WorkSection/Works';
import Collaboration from './Collaboration/Collaboration';
import AboutUs from './AboutUs/AboutUs';
import Projects from './SampleProject/Projects';
import WhyUs from './WhyUs/WhyUsTemplate';
import CommentForm from './Comment/Comment';
// import Comments from './PeopleComment/Comments';
import ContactUs from './ContactUs/ContactUs';
import Footer from './Footer/Footer';

export default function LandingPage() {
    return (
        <div>
            <div className="fixedMenu"><Menu /></div>            
            <Header />
            <WorkedWith />
            <Works />
            <Collaboration />
            <AboutUs />
            <Projects />
            <WhyUs />
            {/* <CommentForm /> */}
            <ContactUs />
            <Footer />
        </div>
    )
}

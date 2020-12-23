import React from 'react'

import './collaboration.css';

function Collaboration() {
    return (
        <div className="CollaborationSection">
            <div className="DimBackground">
                <div className="CollaborationContent">
                    <div className="Content Context">
                        <div>Do you have IDEA?</div>
                        <span id="main">Join our enthusiasm and Let us work together.</span>
                        <div>
                            Our team beleive on the benefits of working collaboratively and finding a new ways to deliever
                            the maximum satisfaction to our socity.
                        </div>
                    </div>
                    <div className="ContactUs">
                        <div className="Content">
                            <div className="ContactUsContent">
                                If you are interested to work with in a passinate group of people, you are on the right place.<br/>
                                Contact us and let's find effective and efficient way to implement your idea together.
                            </div>
                            <div className="contactUsButton">
                                <button type="button">Get Started Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collaboration;
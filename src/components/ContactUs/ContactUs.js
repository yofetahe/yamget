import React, { useState } from 'react'

import FaceBook from '../../assets/social_media/facebook.png';
import FaceBookInv from '../../assets/social_media/facebook_inverse.png';
import Twitter from '../../assets/social_media/twitter.png';
import TwitterInv from '../../assets/social_media/twitter_inverse.png';
import './contactUs.css';

function ContactUs() {
    const [facebook, setFacebookOn ] = useState(false);
    const [twitter, setTwitterOn] = useState(false);
    return (
        <div className="ContactUsSection" id="contact-us">
            <div className="DimCover">
                <div className="Content">
                    <div className="ContactUsTitle">Contact us now!</div>
                    <div className="Address">
                        Ras Mekonnen Street <br/>
                        Tefera Building, Office Number 601/A <br/>
                        Addis Ababa, Ethiopia <br/>
                        +251-94-472-0523 / +251-94-472-0524 / +251-91-166-2766 / +251-91-219-5853 <br/>                
                        info@yamget.com / support@yamget.com
                    </div>
                    <div className="SocialMediaIcon">
                        <img src={facebook ? FaceBookInv : FaceBook} 
                            onMouseOver={() => setFacebookOn(true)}
                            onMouseOut={() => setFacebookOn(false)}
                            className="Facebook"
                            alt="Facebook" />
                        <img src={twitter ? TwitterInv : Twitter}
                            onMouseOver={() => setTwitterOn(true)}
                            onMouseOut={() => setTwitterOn(false)}
                            className="Twitter"
                            alt="Twitter" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;
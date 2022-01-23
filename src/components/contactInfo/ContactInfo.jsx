import { EmailRounded, FacebookRounded, Instagram, LocalPostOfficeRounded, LocationCityRounded, PhoneAndroidRounded, Twitter, WhatsappRounded } from "@mui/icons-material"
import "./contactInfo.css"

export default function ContactInfo() {
    return (
        <div className="contactInfo" id="contact">
            <div className="contactInfoWrapper">
                <div className="contactInfoLeft">
                    <h1 className="contactInfoLefttHeader">Send Us A Message</h1>
                    <form action="" className="contactForm">
                    <div className="contactFormItem">
                        <label>Full Name: </label><br />
                        <input type="text" className="contactFullName" placeholder="Eg. John Smith" />
                    </div>
                    <div className="contactFormItem">
                        <label>Email Address: </label><br />
                        <input type="text" className="contactEmailAddress" placeholder="Eg. john@mymail.org" />
                    </div>
                    <div className="contactFormItem">
                        <label>Message: </label><br />
                        <textarea type="text" className="contactFullName" placeholder="Your message" />
                    </div>
                    <button className="submitbutton">Send Message</button>
                    </form>
                </div>
                <div className="contactInfoRight">
                    <h1 className="contactInfoRightHeader">Get In Touch</h1>
                    <div className="contactItem">
                        <PhoneAndroidRounded />
                        <span>+233 50 737 8000</span>
                    </div>
                    <div className="contactItem">
                        <WhatsappRounded />
                        <span>+233 24 351 4642</span>
                    </div>
                    <div className="contactItem">
                        <EmailRounded />
                        <span>royaldenmas@gmail.com</span>
                    </div>
                    <div className="contactItem">
                        <LocalPostOfficeRounded />
                        <span>P.O BOX LG924 Legon</span>
                    </div>
                    <div className="contactItem">
                        <LocationCityRounded />
                        <span>Accra, Ghana</span>
                    </div>
                    <div className="contactItem">
                        <span className="socialMedia">
                            <FacebookRounded className="socialMediaIcon" /> 
                            <Twitter className="socialMediaIcon" /> 
                            <Instagram className="socialMediaIcon" /> 
                        </span>
                    </div>
                </div>
            </div>
            <div className="footerInfo">
                <span className="footer">Copyright ©2022 All rights reserved. Royal Denmas Ventures</span>
            </div>
        </div>
    )
}


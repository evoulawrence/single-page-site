import "./topBar.css"
import {EmailOutlined, FacebookRounded, Instagram,  PhoneAndroidOutlined, Twitter, WhatsappOutlined} from '@mui/icons-material';

export default function TopBar() {
    return (
        <div className="topBar">
            <div className="topBarWrapper">
                <div className="topBarContacts">
                    <PhoneAndroidOutlined />
                    <span className="phoneNumber">+233 50 737 8000</span>
                    <EmailOutlined />
                    <span className="emailAddress">royaldenmas@gmail.com</span>
                    <WhatsappOutlined />
                    <span className="poBox">+233 24 351 4642</span>
                </div>
                <div className="topBarSocial">
                    <div className="topSocialIcon">
                        <FacebookRounded />
                        <span className="facebook">Facebook</span>
                    </div>
                    <div className="topSocialIcon">
                        <Twitter />
                        <span className="twitter">Twitter</span>
                    </div>
                    <div className="topSocialIcon">
                        <Instagram />
                        <span className="instagram">Instagram</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

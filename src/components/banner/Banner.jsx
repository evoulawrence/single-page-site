import "./banner.css"
import BannerImage from "../../img/banner-image-2.jpg"

export default function Banner() {
    return (
        <div className="banner" id="home">
            <div className="bannerWrapper">
                <img src={BannerImage} alt="" className="bannerImg" height="100%" />
                <div className="bannerText">
                    <h1 className="bannerTextHeader">Royal Denmas Ventures</h1>
                    <span className="bannerDescr">We buy and sell agricultural products within and outside Ghana</span>
                </div>
            </div>
        </div>
    )
}

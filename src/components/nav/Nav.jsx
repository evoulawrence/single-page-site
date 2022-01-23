import "./nav.css"
// import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div className="nav">
            <div className="navContainer">
                <div className="logoWrapper">
                    <span className="logo">ROYAL DENMAS</span>
                    <span className="logoSmall">Ventures</span>
                </div>
                <div className="menuWrapper">
                    <ul className="menuList">
                        <li className="menuListItem"><a href="#home">Home</a></li>
                        <li className="menuListItem"><a href="#about">About</a></li>
                        <li className="menuListItem"><a href="#products">Products</a></li>
                        <li className="menuListItem"><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

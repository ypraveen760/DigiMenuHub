import { LOGO_URL } from "../utils/constans";

const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
                 <img className="logo" src={LOGO_URL} alt="logo of the company"/>
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    )
};

export default Header;
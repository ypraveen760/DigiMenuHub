import { LOGO_URL } from "../utils/constans";
import{useState} from"react"

const Header=()=>{
    const[btn,setBtn]=useState("Login");
    console.log(btn)
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
                    <button type="Submit" onClick={()=>{
                        if (btn=="Login"){
                            setBtn("Logout")
                        }else{
                            setBtn("Login")
                        }
                        
                    }}>{btn}</button>
                </ul>
            </div>

        </div>
    )
};

export default Header;
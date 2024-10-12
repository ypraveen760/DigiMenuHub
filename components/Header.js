import { LOGO_URL } from "../utils/constans";
import{useState,useEffect} from"react";
import { Link } from "react-router-dom";


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
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About US</Link></li>
                    <li><Link to="/contact">Contact US</Link></li>
                    <li><Link>Cart</Link></li>
                   
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
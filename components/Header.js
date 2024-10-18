import { LOGO_URL } from "../utils/constans";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btn, setBtn] = useState("Login");

  const { loggedInUser } = useContext(UserContext);
  const cartItem = useSelector((store) => store.cart.item);
  console.log(cartItem);
  return (
    <div className="flex justify-between m-5 min-w-[380px] items-center border border-black hover:drop-shadow-xl">
      <div className="w-24">
        <img className="logo" src={LOGO_URL} alt="logo of the company" />
      </div>
      <div className="flex ">
        <ul className="flex mr-5 *:mx-2 *:font-semibold text-lg py-3 px-1 ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/cart">Cart ({cartItem.length})</Link>
          </li>

          <button
            className="bg-orange-400 text-cyan-50 px-3  rounded-md"
            type="Submit"
            onClick={() => {
              if (btn == "Login") {
                setBtn("Logout");
              } else {
                setBtn("Login");
              }
            }}
          >
            {btn}
          </button>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

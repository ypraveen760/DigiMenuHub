import { LOGO_URL } from "../utils/constans";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Header = () => {
  const [btn, setBtn] = useState("Login");

  const cartItem = useSelector((store) => store.cart.item);

  return (
    <div className="flex justify-between m-5 min-w-[380px] items-center border border-black ">
      <div className="w-24">
        <img src={LOGO_URL} alt="logo of the company" />
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
          <li>
            <Link to="/contact">Contact</Link>
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
        </ul>
      </div>
    </div>
  );
};

export default Header;

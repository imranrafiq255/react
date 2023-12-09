import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <label htmlFor="">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/service"}>Service</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </label>
    </div>
  );
};

export default Header;

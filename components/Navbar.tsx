import React, { FC } from "react";
import Image from "next/image";
import NavbarStyled from "../styles/navbar.styled";
import logo from "../public/assets/images/logo.png";
import daniel from "../public/assets/images/daniel.jpg";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
const Navbar: FC = () => {
  return (
    <NavbarStyled>
      <div className="navbar-brand">
        <Image src={logo} width={60} height={60} />
      </div>
      <div className="inputBox">
        <i>
          <FaSearch />
        </i>
        <input type="text" placeholder="search" />
      </div>
      <div className="cart-icon">
        <i>
          <FaShoppingCart />
        </i>
      </div>
      <div className="user-details">
        <Image src={daniel} width={60} height={60} className="user-image" />

        <h3>Adejare Daniel</h3>
      </div>
    </NavbarStyled>
  );
};

export default Navbar;

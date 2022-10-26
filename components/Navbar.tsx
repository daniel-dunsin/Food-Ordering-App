import React, { FC } from "react";
import Image from "next/image";
import NavbarStyled from "../styles/navbar.styled";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { FaSearch, FaShoppingCart, FaBars } from "react-icons/fa";
import logo from "../public/assets/images/logo.png";
import daniel from "../public/assets/images/daniel.jpg";

const Navbar: FC = () => {
  const { amount } = useSelector((state: RootState) => state.storeItems);
  return (
    <NavbarStyled>
      <div className="navbar-brand">
        <Image src={logo} width={60} height={60} className="logo" />
      </div>
      <div className="input-box">
        <i>
          <FaSearch />
        </i>
        <input type="text" placeholder="Search" />
      </div>
      <div className="cart-icon">
        <i>
          <FaShoppingCart />
        </i>
        <p>{amount}</p>
      </div>
      <div className="user-details">
        <div className="user-image-container">
          <Image src={daniel} width={50} height={50} className="user-image" />
        </div>

        <h3>Adejare Daniel</h3>
      </div>
      <div className="toggle-icon">
        <i>
          <FaBars />
        </i>
      </div>
    </NavbarStyled>
  );
};

export default Navbar;

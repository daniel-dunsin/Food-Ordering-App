import React, { FC } from "react";
import Image from "next/image";
import NavbarStyled from "../styles/navbar.styled";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { FaSearch, FaShoppingCart, FaBars } from "react-icons/fa";
import logo from "../public/assets/images/logo.png";
import daniel from "../public/assets/images/daniel.jpg";
import { toggleSidebar } from "../store/reducers/others";
import { filterItemsBySearch } from "../store/reducers/items";

const Navbar: FC = () => {
  const { amount } = useSelector((state: RootState) => state.storeItems);
  const dispatch = useDispatch();
  return (
    <NavbarStyled>
      <div className="navbar-brand">
        <Image src={logo} width={60} height={60} className="logo" alt="logo" />
      </div>
      <div className="input-box">
        <i>
          <FaSearch />
        </i>
        <input
          type="text"
          placeholder="Search"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(filterItemsBySearch({ param: event.target.value }));
          }}
        />
      </div>
      <div className="cart-icon">
        <i>
          <FaShoppingCart />
        </i>
        <p>{amount}</p>
      </div>
      <div className="user-details">
        <div className="user-image-container">
          <Image
            src={daniel}
            width={50}
            height={50}
            className="user-image"
            alt="user"
          />
        </div>

        <h3>Adejare Daniel</h3>
      </div>
      <div
        className="toggle-icon"
        onClick={() => {
          dispatch(toggleSidebar());
        }}
      >
        <i>
          <FaBars />
        </i>
      </div>
    </NavbarStyled>
  );
};

export default Navbar;

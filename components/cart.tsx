import React, { FC } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import Submenu from "./Submenu";
import CartStyled from "../styles/cart.styled";
import CartItem from "./cartItem";
import { IData } from "../types/interfaces";
import { clearCart } from "../store/reducers/items";
import emptyCart from "../public/assets/images/emptyCart.png";

const Cart: FC = () => {
  const { cart, total } = useSelector((state: RootState) => state.storeItems);
  const dispatch = useDispatch();
  if (cart.length === 0) {
    return (
      <CartStyled>
        <Image
          src={emptyCart}
          width={"280px"}
          height={"280px"}
          alt="empty cart"
        />
      </CartStyled>
    );
  }
  return (
    <CartStyled>
      <Submenu submenuTitle="Cart Items" />
      <div className="cart-items-container">
        {cart.map((cartItem: IData, index: number) => {
          return <CartItem key={index} {...cartItem} />;
        })}
      </div>
      <div className="total-container">
        <div className="total">
          <h3>Total</h3>
          <p>
            <span>$ </span> {total}
          </p>
        </div>
        <button
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          Clear Cart
        </button>
      </div>
    </CartStyled>
  );
};

export default Cart;

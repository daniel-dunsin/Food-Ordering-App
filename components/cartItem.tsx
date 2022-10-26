import React, { FC } from "react";
import { IData } from "../types/interfaces";
import { FaTimes, FaMinus, FaPlus } from "react-icons/fa";
import Image from "next/image";
import CartItemStyled from "../styles/cartItem.styled";
import { useDispatch } from "react-redux";
import { removeFromCart, toggleItemAmount } from "../store/reducers/items";
const CartItem: FC<IData> = ({
  id,
  total,
  itemId,
  imgSrc,
  price,
  name,
  amount,
}) => {
  const dispatch = useDispatch();
  return (
    <CartItemStyled>
      <div className="img-container">
        <Image src={imgSrc} width="50px" height="50px" />
      </div>
      <div className="item-content">
        <h4>{name}</h4>
        <div className="item-details">
          <p className="item-amount">
            <span>
              <FaTimes />
            </span>{" "}
            {amount}
          </p>
          <div className="toggle-icons">
            <button
              onClick={() => {
                if (amount === 1) {
                  dispatch(removeFromCart({ id }));
                } else {
                  dispatch(toggleItemAmount({ id, type: "dec" }));
                }
              }}
            >
              <FaMinus />
            </button>
            <button
              onClick={() => {
                dispatch(toggleItemAmount({ id, type: "inc" }));
              }}
            >
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
      <div className="item-price">
        <p>
          <span>$</span> {price}
        </p>
      </div>
    </CartItemStyled>
  );
};

export default CartItem;

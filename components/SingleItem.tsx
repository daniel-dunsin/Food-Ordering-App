import React, { FC, useState } from "react";
import Image from "next/image";
import { FaCheck, FaHeart, FaPlus, FaStar } from "react-icons/fa";
import { IData } from "../types/interfaces";
import SingleItemStyled from "../styles/singleItem.styled";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { addToCart, setItemRatings } from "../store/reducers/items";
const SingleItem: FC<IData> = ({
  imgSrc,
  name,
  ratings,
  price,
  itemId,
  id,
}) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state: RootState) => state.storeItems);
  const inCart: IData = cart.find((item) => item.id === id);
  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  return (
    <SingleItemStyled>
      <div className="img-container">
        <Image src={imgSrc} width={"100px"} height={"100px"} />
      </div>
      <div className="item-content">
        <i
          className={`favourite ${isFavourite && "active"}`}
          onClick={() => {
            setIsFavourite((prev) => !prev);
          }}
        >
          <FaHeart />
        </i>
        <h3>{name}</h3>
        <div className="item-details">
          <div className="ratings-container">
            {Array(5)
              .fill(null)
              .map((icon: null, index: number) => {
                return (
                  <i
                    key={index}
                    className={`${index < ratings ? "active" : null}`}
                    onClick={() => {
                      dispatch(setItemRatings({ index, id }));
                    }}
                  >
                    <FaStar />
                  </i>
                );
              })}
            <p>
              <span>$</span>
              {price}
            </p>
          </div>

          <i
            className={`add-to-cart ${inCart && "in-cart"}`}
            onClick={() => {
              if (!inCart) {
                dispatch(addToCart({ id }));
              }
            }}
          >
            {!inCart ? <FaPlus /> : <FaCheck />}
          </i>
        </div>
      </div>
    </SingleItemStyled>
  );
};

export default SingleItem;

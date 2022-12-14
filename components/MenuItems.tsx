import React, { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import MenuItemsStyled from "../styles/menuItems.styled";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { MenuItems as items } from "../public/data";
import { IMenuItems } from "../types/interfaces";
import {
  decreaseMenuItemsPosition,
  increaseMenuItemsPosition,
} from "../store/reducers/others";
import { setFilterParameters } from "../store/reducers/items";

const MenuItems: FC = () => {
  const containerRef = useRef(null);
  const { menuItemsPosition } = useSelector((state: RootState) => state.others);
  const { filterParameter } = useSelector(
    (state: RootState) => state.storeItems
  );
  const dispatch = useDispatch();

  useEffect(() => {
    containerRef.current.scroll({
      left: menuItemsPosition,
    });
  }, [menuItemsPosition]);

  return (
    <MenuItemsStyled>
      <div className="position-switchers">
        <i
          onClick={() => {
            dispatch(decreaseMenuItemsPosition());
          }}
        >
          <FaChevronLeft />
        </i>
        <i
          onClick={() => {
            dispatch(increaseMenuItemsPosition());
          }}
        >
          <FaChevronRight />
        </i>
      </div>
      <div className="menu-items-container" ref={containerRef}>
        {items.map((item: IMenuItems, index: number) => {
          return (
            <article
              className={`menu-item ${
                filterParameter === item.itemId ? "active" : "null"
              }`}
              key={index}
              onClick={() => {
                dispatch(setFilterParameters({ param: item.itemId }));
              }}
            >
              <div className="menu-item-image-container">
                <Image
                  src={item.imgSrc}
                  width={"40px"}
                  height={"40px"}
                  className="menu-item-image"
                  alt={item.name}
                />
              </div>
              <h3>{item.name}</h3>
              <i className="menu-item-arrow-icon">
                <FaChevronRight />
              </i>
            </article>
          );
        })}
      </div>
    </MenuItemsStyled>
  );
};

export default MenuItems;

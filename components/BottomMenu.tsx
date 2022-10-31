import React, { FC, useState } from "react";
import {
  FaFacebookMessenger,
  FaHeart,
  FaHome,
  FaStickyNote,
  FaWallet,
} from "react-icons/fa";
import { BsGearFill } from "react-icons/bs";
import BottomMenuStyled from "../styles/bottomMenu.styled";
import { IBottomMenuIcons } from "../types/interfaces";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setActiveIconIndex } from "../store/reducers/others";

const bottomIcons: IBottomMenuIcons[] = [
  <FaHome />,
  <FaFacebookMessenger />,
  <FaWallet />,
  <FaHeart />,
  <FaStickyNote />,
  <BsGearFill />,
];

const BottomMenu: FC = () => {
  const { activeIconIndex } = useSelector((state: RootState) => state.others);
  const dispatch = useDispatch();

  return (
    <BottomMenuStyled>
      <ul>
        {bottomIcons.map((icon: IBottomMenuIcons, index: number) => {
          return (
            <li
              className={`icon ${activeIconIndex === index ? "active" : ""}`}
              onClick={() => {
                dispatch(setActiveIconIndex({ index }));
              }}
              key={index}
            >
              <i>{icon}</i>
            </li>
          );
        })}

        <div className="indicator"></div>
      </ul>
    </BottomMenuStyled>
  );
};

export default BottomMenu;

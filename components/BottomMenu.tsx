import React, { useState } from "react";
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

const bottomMenuIcons: IBottomMenuIcons[] = [
  <FaHome />,
  <FaFacebookMessenger />,
  <FaWallet />,
  <FaHeart />,
  <FaStickyNote />,
  <BsGearFill />,
];

const BottomMenu = () => {
  const [activeIconIndex, setActiveIconIndex] = useState<number>(1);
  const handleClick = (index: number): void => {
    setActiveIconIndex(index);
  };
  return (
    <BottomMenuStyled>
      <ul>
        {bottomMenuIcons.map((icon: IBottomMenuIcons, index: number) => {
          return (
            <li
              className={`icon ${activeIconIndex === index ? "active" : ""}`}
              key={index}
              onClick={() => {
                handleClick(index);
              }}
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

import React, { FC } from "react";
import { Navbar, Banner, MenuItems, Submenu } from "../components";
import MainStyled from "../styles/main.styled";
import { BottomMenu } from "../components";
const Main: FC = () => {
  return (
    <MainStyled>
      <Navbar />
      <Banner />
      <Submenu submenuTitle="Menu Category" />
      <MenuItems />
      <BottomMenu />
    </MainStyled>
  );
};

export default Main;

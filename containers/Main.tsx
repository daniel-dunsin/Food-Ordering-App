import React, { FC } from "react";
import {
  Navbar,
  Banner,
  MenuItems,
  Submenu,
  ItemsContainer,
} from "../components";
import MainStyled from "../styles/main.styled";
import { BottomMenu } from "../components";
const Main: FC = () => {
  return (
    <MainStyled>
      <Navbar />
      <Banner />
      <Submenu submenuTitle="Menu Category" />
      <MenuItems />
      <ItemsContainer />
      <BottomMenu />
    </MainStyled>
  );
};

export default Main;

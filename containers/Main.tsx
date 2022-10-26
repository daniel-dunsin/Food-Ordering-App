import React, { FC } from "react";
import { Navbar, Banner, MenuItems } from "../components";
import MainStyled from "../styles/main.styled";
import { BottomMenu } from "../components";
const Main: FC = () => {
  return (
    <MainStyled>
      <Navbar />
      <Banner />
      <MenuItems />
      <BottomMenu />
    </MainStyled>
  );
};

export default Main;

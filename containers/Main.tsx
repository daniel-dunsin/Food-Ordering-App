import React, { FC } from "react";
import { Navbar } from "../components";
import MainStyled from "../styles/main.styled";

const Main: FC = () => {
  return (
    <MainStyled>
      <Navbar />
    </MainStyled>
  );
};

export default Main;

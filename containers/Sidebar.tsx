import React from "react";
import { useSelector } from "react-redux";
import { VisaCard, Cart } from "../components";
import { RootState } from "../store";
import SidebarStyled from "../styles/sidebar.styled";
const Sidebar = () => {
  const { sidebarOpened } = useSelector((state: RootState) => state.others);
  return (
    <SidebarStyled className={`${sidebarOpened && "sidebar-open"}`}>
      <VisaCard />
      <Cart />
    </SidebarStyled>
  );
};

export default Sidebar;

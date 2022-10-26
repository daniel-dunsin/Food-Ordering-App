import React, { FC } from "react";
import { FaChevronRight } from "react-icons/fa";
import SubmenuStyled from "../styles/submenu.styled";
import { ISubmenu } from "../types/interfaces";
const Submenu: FC<ISubmenu> = ({ submenuTitle }) => {
  return (
    <SubmenuStyled>
      <h2>{submenuTitle}</h2>
      <div>
        <p>View All</p>
        <span>
          <i>
            <FaChevronRight />
          </i>
        </span>
      </div>
    </SubmenuStyled>
  );
};

export default Submenu;

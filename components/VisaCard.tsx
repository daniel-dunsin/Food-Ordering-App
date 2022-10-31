import React from "react";
import VisaCardStyled from "../styles/visacard.styled";
import visaLogo from "../public/assets/images/visalogo.png";
import cardChip from "../public/assets/images/chip.png";
import Image from "next/image";

const VisaCard = () => {
  return (
    <VisaCardStyled>
      <div className="visa-logo">
        <Image src={visaLogo} width={"90px"} height={"30px"} alt="visalogo" />
      </div>
      <div className="card-chip">
        <Image src={cardChip} width={"50px"} height={"25px"} alt="card-chip" />
      </div>
      <h4 className="card-number">1234 567 8920 3200</h4>
      <h4 className="card-name">Adejare Daniel</h4>
      <h4 className="card-from">10/21</h4>
      <h4 className="card-to">10/26</h4>
    </VisaCardStyled>
  );
};

export default VisaCard;

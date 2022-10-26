import React, { FC } from "react";
import Image from "next/image";
import BannerStyled from "../styles/banner.styled";
import bannerImg from "../public/assets/images/delivery.png";
const Banner: FC = () => {
  return (
    <BannerStyled>
      <div className="banner-container">
        <div className="banner-text">
          <h1>Hello Daniel</h1>
          <p>
            Get free discount for every <span>$20</span> purchase
          </p>
          <button>Learn More</button>
        </div>
        <div className="banner-img">
          <Image src={bannerImg} width={"350px"} height={"240px"} />
        </div>
      </div>
    </BannerStyled>
  );
};

export default Banner;

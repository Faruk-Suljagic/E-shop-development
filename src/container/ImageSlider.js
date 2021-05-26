import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import interior from "../css/images/interior.jpeg";
import decoration from "../css/images/decoration.jpeg";
import basket from "../css/images/basket.jpeg";
import "../css/imageSlider.css";

const ImageSlider = (props) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="content">
      <Carousel {...settings}>
        <Wrap>
          <a href="/#" className="img-text_overlay">
            <img src={decoration} alt="sale" />
            <h1 className="slideShow clock">Contemporary Pendant Lighting</h1>

            <span href="/#" className="overlayLink">
              Interior
            </span>
            <span className="underline" />
          </a>
        </Wrap>
        <Wrap>
          <a href="/#" className="img-text_overlay">
            <img src={interior} alt="sale" />
            <h1 className="slideShow lights">
              Minimal Rotating Disc Wall Clock
            </h1>
            <span href="/#" className="overlayLink">
              Decoration
            </span>
            <span className="underline" />
          </a>
        </Wrap>
        <Wrap>
          <a href="/#" className="img-text_overlay">
            <img src={basket} alt="sale" />
            <h1 className="slideShow basket">Bamboo Zigzag Pattern Basket</h1>

            <span href="/#" className="overlayLink">
              Essentials
            </span>
            <span className="underline" />
          </a>
        </Wrap>
      </Carousel>
    </div>
  );
};

const Carousel = styled(Slider)`
  margin: 20px 40px 0px 40px;
  overflow: hidden;
  & > button {
    opacity: 1;
    color: black;
    height: 100%;
    width: 8vw;
    text-align: left;
    z-index: 1;
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: black;
    }
  }
  li.slick-active button:before {
    color: #fff;
  }
  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: -75px;
  }
  .slick-next {
    right: -75px;
  }
`;
const Wrap = styled.div`
  display: flex !important;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  z-index: -1;
  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    padding: 4px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 4px;
    }
    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;

export default ImageSlider;

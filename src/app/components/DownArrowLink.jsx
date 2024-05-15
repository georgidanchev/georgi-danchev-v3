import Image from "next/image";
import arrowDownSvg from "../../assets/down-arrow.svg";

import styled from "styled-components";

const StyledDownArrow = styled.a`
  position: absolute;
  bottom: 20vh;
  z-index: 3;
  left: 50%;

  @media only screen and (min-width: 590px) {
    bottom: 12vh;
  }

  animation-name: down-arrow-animate;
  animation-iteration-count: infinite;
  animation-duration: 2s;

  .down-arrow__image {
    width: 30px;
    height: 30px;
    transform: translateX(-50%);

    @media only screen and (min-width: 590px) {
      width: 50px;
      height: 50px;
    }
  }

  @keyframes down-arrow-animate {
    0% {
      transform: translateY(0);
    }

    40% {
      transform: translateY(25%);
    }

    50% {
      transform: translateY(25%);
    }

    100% {
      transform: translateY(0);
    }
  }
`;

const DownArrow = () => {
  return (
    <StyledDownArrow href="#about" className="down-arrow" data-scroll-to>
      <Image
        className="down-arrow__image animate__animated animate__delay-1s"
        data-scroll
        data-scroll-repeat="false"
        data-scroll-class="animate__fadeIn"
        src={arrowDownSvg}
        alt="Down arrow image"
      />
    </StyledDownArrow>
  );
};

export default DownArrow;

import styled from "styled-components";
import { Button } from "../Button";
import * as Scroll from "react-scroll";

const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`;

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const VideoBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;
  text-shadow: 3px 3px #000;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  max-width: 600px;
  text-shadow: 2px 2px #000;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Hero = () => {
  var Scroll = require("react-scroll");

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src="/hero.jpeg" type="jpeg" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Home-based dog grooming salon in Tonbridge</HeroH1>
        <HeroP>
          We provide a tailored grooming service for you and your dog’s needs.
        </HeroP>
        <HeroBtnWrapper>
          <Button smooth={true} to="contact" offset={-80}>
            Contact Us
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;

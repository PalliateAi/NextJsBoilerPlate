import styled from "styled-components";

const HeroContainer = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

const Heading = styled.h1`
  color: #000;
  font-size: 10rem;
  font-weight: 900;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <Heading>Hero</Heading>
    </HeroContainer>
  );
};

export default Hero;

import React from "react";
import styled from "styled-components";

const PricingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

const PricingWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

const PricingCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

const PricingIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

const PricingH1 = styled.h1`
  font-size: 2.5rem;
  color: #010606;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

const PricingH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

const PricingP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

const Pricing = () => {
  return (
    <PricingContainer id="pricing">
      <PricingH1>Our Services</PricingH1>
      <PricingWrapper>
        <PricingCard>
          <PricingIcon src="icon-1.svg" />
          <PricingH2>Small Trim</PricingH2>
          <PricingP>Bath, blow dry and a small trim from £35</PricingP>
        </PricingCard>
        <PricingCard>
          <PricingIcon src="icon-2.svg" />
          <PricingH2>Bath and Blow Dry</PricingH2>
          <PricingP>Bath, blow dry and a small trim from £35</PricingP>
        </PricingCard>
        <PricingCard>
          <PricingIcon src="icon-3.svg" />
          <PricingH2>Nail Trimming</PricingH2>
          <PricingP>Bath, blow dry and a small trim from £35</PricingP>
        </PricingCard>
      </PricingWrapper>
    </PricingContainer>
  );
};

export default Pricing;

import React, { useState } from "react";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";
import styled from "styled-components";

const FormContainer = styled.div`
  margin: 100px auto;
  width: 100%;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
  position: relative;
  height: 600px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    border-radius: 0px;
  }
`;

const FormContentLeft = styled.div`
  background: linear-gradient(
    175deg,
    rgb(227, 181, 164) 0%,
    rgb(119, 51, 68) 100%
  );
  border-radius: 10px 0 0 10px;
  position: relative;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const FormImg = styled.img`
  width: 80%;
  height: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <FormContainer id="contact">
        <FormContentLeft>
          <FormImg src="icon-2.svg" alt="spaceship" />
        </FormContentLeft>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </FormContainer>
    </>
  );
};

export default Form;

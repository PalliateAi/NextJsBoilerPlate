import React from "react";
import styled from "styled-components";

const FormContentRight = styled.div`
  border-radius: 0 10px 10px 0;
  position: relative;
  background: linear-gradient(90deg, rgb(40, 40, 40) 0%, rgb(17, 17, 17) 100%);

  @media screen and (max-width: 1000px) {
    border-radius: 0px;
    background: #f5e9e2;
  }
`;

const FormContainer = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormImg = styled.img`
  width: 70%;
  height: 20%;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const FormH1 = styled.h1`
  color: #fff;

  @media screen and (max-width: 1000px) {
    color: #000;
  }
`;

const FormWrapper = styled.div`
  width: 450px;
  margin-left: 5rem;
`;

const FormInputs = styled.div`
  margin-bottom: 0.5rem;
  width: 80%;
  height: 80px;
`;

const FormLabel = styled.label`
  display: inline-block;
  font-size: 0.8rem;
  margin-bottom: 6px;
  color: #fff;

  @media screen and (max-width: 1000px) {
    color: #000;
  }
`;

const FormField = styled.input`
  display: block;
  padding-left: 10px;
  outline: none;
  border-radius: 2px;
  height: 40px;
  width: 100%;
  border: none;
`;

const SendBtn = styled.button`
  width: 80%;
  height: 50px;
  margin-top: 30px;
  border-radius: 50px;
  background: #773344;
  outline: none;
  border: none;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
`;

const FormText = styled.textarea`
  display: block;
  padding-left: 10px;
  outline: none;
  border-radius: 2px;
  height: 80px;
  width: 100%;
  border: none;
  resize: none;
  font-family: "arial";
`;

const FormSignup = ({}) => {
  return (
    <FormContentRight>
      <FormContainer>
        <FormImg src="logo-removebg.png" alt="spaceship" />
        <FormH1>We'd love to hear from you</FormH1>
        <FormWrapper>
          <FormInputs>
            <FormLabel>Name</FormLabel>
            <FormField placeholder="Name" type="text" />
          </FormInputs>
          <FormInputs>
            <FormLabel>Email</FormLabel>
            <FormField
              type="email"
              name="email"
              placeholder="Enter your email"
            />
          </FormInputs>

          <FormInputs>
            <FormLabel>Message</FormLabel>
            <FormText type="text" name="message" />
          </FormInputs>

          <SendBtn to="/">Send Message</SendBtn>
        </FormWrapper>
      </FormContainer>
    </FormContentRight>
  );
};

export default FormSignup;

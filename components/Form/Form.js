import React, { useState } from "react";
import FormSignup from "./FormSignup";
import styled from "styled-components";
import Iframe from "react-iframe";

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

const IframeWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Form = () => {
  return (
    <>
      <FormContainer id="contact">
        <FormContentLeft>
          <IframeWrapper>
            <Iframe
              url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2500.8551360827937!2d0.35948171575812465!3d51.184892879583316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47df497c09097b6d%3A0x88b4774de2755b76!2sScruffs%202%20Crufts!5e0!3m2!1sen!2suk!4v1633008856313!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
            />
          </IframeWrapper>
        </FormContentLeft>
        <FormSignup />
      </FormContainer>
    </>
  );
};

export default Form;

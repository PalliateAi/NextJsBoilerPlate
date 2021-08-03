import React from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  color: #000;
`;

const ContactWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

const Contact = () => {
  return (
    <ContactContainer>
      <ContactWrapper></ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;

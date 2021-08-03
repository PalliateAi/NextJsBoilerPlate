import React from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import styled from "styled-components";

const FormContentRight = styled.div`
  border-radius: 0 10px 10px 0;
  position: relative;
  background: linear-gradient(90deg, rgb(40, 40, 40) 0%, rgb(17, 17, 17) 100%);
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

const FormWrapper = styled.div`
  width: 450px;
  margin-left: 5rem;
`;

const FormInputs = styled.div`
  margin-bottom: 0.5rem;
  width: 80%;
`;

const FormLabel = styled.label`
  display: inline-block;
  font-size: 0.8rem;
  margin-bottom: 6px;
  color: #fff;
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
  margin-top: 10px;
  border-radius: 2px;
  background: #773344;
  outline: none;
  border: none;
  color: #fff;
  font-size: 1rem;
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

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <FormContentRight>
      <FormContainer>
        <h1 style={{ color: "#fff" }}>We'd love to hear from you</h1>
        <FormWrapper>
          <form onSubmit={handleSubmit} noValidate>
            <FormInputs>
              <FormLabel>Name</FormLabel>
              <FormField
                placeholder="Name"
                type="text"
                name="username"
                value={values.username}
                onChange={handleChange}
              />
            </FormInputs>
            <FormInputs>
              <FormLabel>Email</FormLabel>
              <FormField
                type="email"
                name="email"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
              />
            </FormInputs>

            <FormInputs>
              <FormLabel>Message</FormLabel>
              <FormText
                type="text"
                name="message"
                value={values.message}
                onChange={handleChange}
              />
            </FormInputs>

            <SendBtn>Send Message</SendBtn>
          </form>
        </FormWrapper>
      </FormContainer>
    </FormContentRight>
  );
};

export default FormSignup;

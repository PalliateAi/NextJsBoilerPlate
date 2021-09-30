import React from "react";

const FormSignup = ({}) => {
  return (
    <>
      <div className="FormContentRight">
        <form
          className="FormContainer"
          action="https://formsubmit.co/scruffscruftstonbridge@gmail.com"
          method="POST"
        >
          <div style={{ textAlign: "center" }}>
            <h1 className="FormH1">
              If you are interested in booking an appointment, get in touch.
            </h1>
          </div>
          <div className="FormWrapper">
            <div className="FormInputs">
              <label className="FormLabel">Name</label>
              <input
                className="FormField"
                placeholder="Name"
                type="text"
                required
              />
            </div>
            <div className="FormInputs">
              <label className="FormLabel">Email</label>
              <input
                className="FormField"
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="FormInputs">
              <label className="FormLabel">Message</label>
              <textarea
                className="FormText"
                type="text"
                name="message from website"
                required
              />
            </div>
            <button className="SendBtn" type="submit" title="Send Message">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormSignup;

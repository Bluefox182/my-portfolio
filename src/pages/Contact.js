import React, { useState } from "react";
import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("mwkzkezo");
  if (state.succeeded) {
    return (
      <h3
        style={{
          textAlign: "center",
          fontSize: "28px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        Thanks for contact me! I will answer as soon as possible.
      </h3>
    );
  }
  return (
    <StyledContact>
      <div className="ContactForm-Container">
        <div className="contact-content">
          <div>
            <h1 className="title">Let's Talk</h1>
            <h2 className="paragraph-text">
              Whether it's just to say Hi 👋 or if you have a question or
              proposal, send me a message!
            </h2>
          </div>
          <div>
            <form
              method="POST"
              name="contact"
              className="form"
              action="https://formspree.io/f/mwkzkezo"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="form-container">
                <div className="form-field">
                  <input
                    className="form-input"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    required
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>
                <div className="form-field">
                  <input
                    className="form-input"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <div className="form-textarea">
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <div className="form-button">
                <button className="button-contact" type="submit" value="Send">
                  Send Message!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </StyledContact>
  );
}

export default Contact;

const StyledContact = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  // padding-top: 60px;
  // padding-bottom: 30px;
  overflow: none;
  @media (min-width: 1201px) {
    padding-top: 0;
    padding-bottom: 0;
  }

  .ContactForm-Container {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 95%;
    height: auto;
    padding: 60px 20px;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    color: var(--font-light-color);
    border: 3px solid var(--border-color);
    border-radius: 0.5rem;
    box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.3);
    transition: all 0.5s ease-in-out;

    @media (max-width: 479px) {
      margin: 0 20px;
    }
    @media (min-width: 480px) and (max-width: 768px) {
      width: 75%;
    }
    @media (min-width: 1201px) {
      width: 80%;
    }
  }

  .contact-content {
    display: flex;
    width: 100%;
    max-width: 700px;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    overflow: none;
  }

  .title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 20px;
    color: var(--primary-color-light);
    overflow-y: hidden;
    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }

  .paragraph-text {
    font-size: 1.2rem;
    font-weight: 300;
    margin-bottom: 20px;
    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }

  .form-container {
    display: flex;
    width: 100%;
    padding: 20px 0;
    gap: 50px;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .form-field {
    width: 100%;
    height: auto;
    border-bottom: 1px solid var(--border-color);
    color: var(--font-light-color-2);
    transition: all 0.5s ease-in-out;
  }

  input {
    width: 100%;
    height: 40px;
    background-color: transparent;
    border: none;
    font-size: 1.2rem;
    font-weight: 300;
    color: var(--font-light-color-2);
    font-family: "Montserrat", sans-serif;

    &:focus {
      outline: none;
      border-bottom: 3px solid var(--primary-color-light);

      &::placeholder {
        color: var(--font-light-color-2);
      }
    }
  }

  textarea {
    border: 3px solid var(--border-color);
    background: transparent;
    outline: none;
    margin-bottom: 30px;
    color: var(--font-light-color-2);
    width: 100%;
    padding: 0.8rem 1rem;
    border-radius: 8px;
    font-family: "Montserrat", sans-serif;
    ::placeholder {
      color: var(--font-light-color-2);
      opacity: 1; /* Firefox */
    }
    :focus {
      border: 3px solid var(--primary-color-light);
      /* border-radius: 8px; */
    }
  }

  .button-contact {
    width: 100%;
    color: var(--white-color-2);
    height: 60px;
    border: none;
    background: var(--primary-color);
    font-size: 20px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    font-family: "Montserrat", sans-serif;
    cursor: pointer;
    :hover {
      background: var(--primary-color-light);
      border-radius: 8px;
      transition: 0.5s all ease;
    }
  }
`;

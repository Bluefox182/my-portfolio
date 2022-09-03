import React from "react";
import styled from "styled-components";

function ButtonProjects({ filter, button }) {
  return (
    <ButtonsStyled>
      {button.map((but, i) => {
        return (
          <ButtonStyled key={i} onClick={() => filter(but)}>
            {but}
          </ButtonStyled>
        );
      })}
    </ButtonsStyled>
  );
}

export default ButtonProjects;

const ButtonStyled = styled.button`
  @media screen and (max-width: 599px) {
    padding: 0.5rem 0rem;
    width: 40%;
  }
  outline: none;
  background: linear-gradient(
        to right,
        var(--background-dark-grey),
        var(--background-dark-grey)
      )
      padding-box,
    linear-gradient(to right, #3330e4, #db00ff) border-box;
  border: 2px solid transparent;
  border-radius: 10px;
  padding: 0.4rem 2.4rem;
  font-size: 16px;
  border-radius: 20px;
  color: var(--font-light-color);
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  margin-bottom: 0.6rem;
  @media (max-width: 480px) {
    font-size: 14px;
  }

  &:active,
  &:focus {
    background: linear-gradient(to right, #4d74e6, #2a57dc);
  }
  &:hover {
    transform: scale(1.1);
    background: linear-gradient(to right, #3330e4, #db00ff);
    border: none;
    color: var(--white-color-2);
    transition: all 0.5s ease-in-out;
  }
  &:not(:last-child) {
    margin-right: 0.6rem;
  }
`;
const ButtonsStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  width: 70%;
  padding: 35px 0;
  @media screen and (max-width: 480px) {
    gap: 10px;
    width: 100%;
  }
  @media screen (min-width: 481px) and (max-width: 767px) {
    flex-wrap: wrap;
    width: 80%;
  }
`;

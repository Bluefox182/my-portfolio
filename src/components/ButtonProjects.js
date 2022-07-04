import React from 'react';
import styled from 'styled-components';

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
  border: none;
  background-color: #0779e4;
  padding: 0.4rem 2.4rem;
  font-size: 16px;
  border-radius: 20px;
  color: #eeeeee;
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
    background: linear-gradient(to right, #4d74e6, #2a57dc);
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
  @media screen and (max-width: 599px) {
    gap: 10px;
  }
  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
    width: 80%;
  }
`;

import React from 'react';
import styled from 'styled-components';

function FormCards() {
  return (
    <StyledFormCards>
      <div className='Cards-Container'>
        <div className='Cards-Items'>
          <h2>Fernando Galdós</h2>
          <p>FullStack Engineer</p>
        </div>
        <div className='Cards-Items'>
          <h2>Location</h2>
          <p>Lima, Perú</p>
        </div>
        <div className='Cards-Items'>
          <h2>Email</h2>
          <p>fergaldoss@gmail.com</p>
        </div>
      </div>
    </StyledFormCards>
  );
}

export default FormCards;

const StyledFormCards = styled.div`
  height: auto;
  .Cards-Container {
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }

  .Cards-Items {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20px;
    width: 100%;
    color: var(--white-color-2);
    padding: 20px;
    background-color: var(--primary-color-light);
    box-shadow: 8px 5px 5px 0px rgba(35, 71, 196, 0.31);
    -webkit-box-shadow: 8px 5px 5px 0px rgba(35, 71, 196, 0.31);
    -moz-box-shadow: 8px 5px 5px 0px rgba(35, 71, 196, 0.31);

    h2 {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 20px;
    }
  }

  @media (max-width: 1300px) {
  }
`;

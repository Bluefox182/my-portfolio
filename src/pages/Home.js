import React from "react";
import styled from "styled-components";
import Particle from "../components/Particle";
import Typed from "../components/Typed";

function Home() {
  return (
    <HomeStyled>
      <div className="typography">
        <h1 className="main-text">
          Howdy, I'm<br></br>
          <span className="has-first-color">Fernando</span>
        </h1>
        <h2>FullStack Engineer | MERN Stack</h2>
        <Typed />
      </div>
      <div className="particles-con">
        <Particle className="particles" />
      </div>
    </HomeStyled>
  );
}

export default Home;

const HomeStyled = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin: 0 20px;
    box-sizing: border-box;
  }

  .typography {
    position: absolute;
    text-align: left;
    padding: 0 20px;
    width: 100%;

    h1,
    span {
      font-size: 6rem;
      font-weight: 500;
    }
    span {
      color: var(--primary-color-light);
    }
    h2 {
      font-size: 1.5rem;
      font-weight: 300;
      line-height: 1;
      color: var(--font-light-color);
      padding: 15px 0;
    }

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--secondary-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }
    }
  }

  @media (max-width: 767px) {
    .typography {
      display: flex;
      flex-direction: column;
      justify-content: center;
      /* margin-left: 20px; */
      margin: 0;
      width: 100%;
      h1,
      span {
        font-size: 3.5rem;
      }
      h2 {
        font-size: 1.3rem;
      }
    }
  }
  @media (min-width: 768px) {
    .typography {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 220px;
    }
  }
  @media screen and (min-width: 1200px) {
    .typography {
      margin-left: 0;
    }
  }
`;

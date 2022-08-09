import React from "react";
import styled from "styled-components";
import avatar from "../assets/img/avatar4.png";

function About() {
  return (
    <StyledAbout>
      <div className="MainContainer">
        <div className="TopContainer">
          <h1 className="title">About Me</h1>
        </div>
        <div className="HeroContainer">
          <div className="LeftContainer">
            <h2 className="sub-title">Who I am?</h2>
            <p>
              ⚡ I'm a Full-Stack Engineer focused on Front-End Development and
              emerging tech such as AR and Blockchain.
            </p>
            <p>
              ⚡ Well-Organized person, problem solver, creative developer with
              high attention to detail. Fan of GOT, Marvel, outdoor activities,
              TV series and Movies. A family person and father of two gorgeous
              girls.
            </p>
            <p>
              ⚡ Interested in the entire frontend spectrum and working on
              ambitious projects with positive people.
            </p>
          </div>
          <div className="RightContainer">
            <img src={avatar} alt="Avatar" />
          </div>
        </div>
      </div>
    </StyledAbout>
  );
}

export default About;

const StyledAbout = styled.div`
  /* width: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
  padding-bottom: 30px;

  @media screen and (min-width: 800px) and (max-width: 1024px) {
    /* padding-top: 100px; */
  }

  .MainContainer {
    display: flex;

    flex-direction: column;
    width: 95%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-between;
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
    @media (min-width: 768px) and (max-width: 1200px) {
      width: 90%;
      padding: 0 100px;
    }
    @media (min-width: 1201px) {
      width: 90%;
    }
  }

  .HeroContainer {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: space-between;
    justify-content: space-between;
    color: var(--font-light-color);
    @media (max-width: 1024px) {
      flex-direction: column;
      /* align-items: space-evenly; */
    }
  }

  .title {
    font-size: 2.5rem;
    font-weight: 700;
    padding: 20px;
    color: var(--primary-color-light);
    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }

  .sub-title {
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 20px;
    @media (max-width: 480px) {
      font-size: 1.4rem;
    }
  }

  .LeftContainer {
    display: flex;
    width: 50%;
    max-width: 700px;
    flex-direction: column;
    justify-content: space-evenly;
    height: 500px;
    p {
      padding: 10px 0;
    }
    @media (max-width: 1024px) {
      width: 100%;
    }
    @media (max-width: 480px) {
      p {
        font-size: 0.7rem;
      }
    }
  }

  .RightContainer {
    display: flex;
    width: 50%;
    max-width: 700px;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    @media (max-width: 1024px) {
      width: 100%;
      align-items: center;
      img {
        width: 300px;
      }
    }
  }
`;

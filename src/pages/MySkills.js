import React from 'react';
import styled from 'styled-components';

// Icons Import
import HtmlIcon from '../assets/img/html5-icon.svg';
import CssIcon from '../assets/img/css-icon.svg';
import JavaScript from '../assets/img/javascript-icon.svg';
import ReactJS from '../assets/img/reactjs-icon.svg';
import MongoDB from '../assets/img/mongodb-icon.svg';
import NodeJs from '../assets/img/nodejs-icon.svg';
import VueJs from '../assets/img/vuejs-icon.svg';
import Sass from '../assets/img/sass-icon.svg';
import Styled from '../assets/img/styled-icon.svg';
import MySQL from '../assets/img/mysql-icon.svg';
import Redux from '../assets/img/redux-icon.svg';
import ExpressJs from '../assets/img/express-icon.svg';
import Npm from '../assets/img/npm-icon.svg';
import Yarn from '../assets/img/yarn-icon.svg';
import PostgreSQL from '../assets/img/postgresql-icon.svg';
import Git from '../assets/img/git-icon.svg';
import AWS from '../assets/img/aws-icon.svg';
import Bootstrap from '../assets/img/bootstrap-icon.svg';

function MySkills() {
  return (
    <StyledSkills>
      <div className='MainContainer'>
        <div className='TopContainer'>
          <h1 className='title'>My Skills</h1>
        </div>
        <div className='Icons-Container'>
          <img src={HtmlIcon} alt='HTML Icon' />
          <img src={CssIcon} alt='CSS Icon' />
          <img src={JavaScript} alt='Js Icon' />
          <img src={ReactJS} alt='ReactJs Icon' />
          <img src={VueJs} alt='VueJs Icon' />
          <img src={Bootstrap} alt='Bootstrap Icon' />
          <img src={Sass} alt='Sass Icon' />
          <img src={Styled} alt='Styled Components Icon' />
          <img src={MongoDB} alt='MongoDB Icon' />
          <img src={NodeJs} alt='NodeJs Icon' />
          <img src={MySQL} alt='MySQL Icon' />
          <img src={PostgreSQL} alt='PostgreSQL Icon' />
          <img src={Redux} alt='Redux Icon' />
          <img src={Git} alt='Git Icon' />
          <img src={ExpressJs} alt='ExpressJs Icon' />
          <img src={Npm} alt='NPM Icon' />
          <img src={Yarn} alt='Yarn Icon' />
          <img src={AWS} alt='AWS Icon' />
        </div>
      </div>
    </StyledSkills>
  );
}

export default MySkills;
const StyledSkills = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding-top: 60px;
  padding-bottom: 30px;

  .MainContainer {
    display: flex;
    flex-direction: column;
    width: 95%;
    height: 80%;
    padding: 15px;
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
      margin-right: 70px;
      margin-left: 200px;
    }
    @media (min-width: 1201px) {
      width: 80%;
    }
  }
  .title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 20px;
    padding: 20px 0;
    color: var(--primary-color-light);
    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }

  .Icons-Container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    padding: 20px 0;
    justify-content: center;

    img {
      max-width: 140px;
      /* border: 2px solid var(--border-color); */
      @media (max-width: 479px) {
        width: 50px;
      }
      @media (min-width: 480px) and (max-width: 540px) {
        width: 70px;
      }
      @media (min-width: 541px) and (max-width: 768px) {
        width: 90px;
      }
      @media (min-width: 769px) and (max-width: 875px) {
        width: 110px;
      }
      @media (min-width: 876px) and (max-width: 1200px) {
        width: 120px;
      }
      @media (min-width: 1201px) and (max-width: 1450px) {
        width: 130px;
      }
    }
  }
`;

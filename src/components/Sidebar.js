import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import avatar from '../assets/img/avatar.png';

function Sidebar({ navToggle }) {
  return (
    <SidebarContainer className={`${navToggle ? 'nav-toggle' : ''}`}>
      <div className='Nav-Container'>
        <div className='avatar'>
          <img src={avatar} alt='' />
        </div>
        <ul className='nav-items'>
          <li className='nav-item'>
            <Link to='/' activeClassName='active-class'>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/about' activeClassName='active-class'>
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/skills' activeClassName='active-class'>
              My Skills
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/work' activeClassName='active-class'>
              Work
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/contact' activeClassName='active-class'>
              Contact
            </Link>
          </li>
        </ul>
        <footer className='footer'>
          <p>© 2022 Bluefox182</p>
        </footer>
      </div>
    </SidebarContainer>
  );
}

export default Sidebar;

// Styled Components
const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--sidebar-dark-color);
  width: 200px;
  height: 100%;
  padding: 20px;
  padding-left: 0;  
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  @media (max-width: 767px) {
    transform: translateX(-100%);
    z-index: 20;
  }

  .Nav-Container {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: 1px solid var(--border-color);
  }


  .avatar {
    width: 80%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 1rem 0;
    img {
      width: 100%;
      border-radius: 50%;
      background: var(--border-color);
      background-size: cover;
      background-position: center;
      border: 3px solid transparent;
    }
  }
  .nav-items {
    width: 100%;
    text-align: center;
    li {
      display: block;
      a {
        display: block;
        padding: 1rem 0;
        position: relative;
        color: var(--border-color)
        z-index: 10;
        transition: all 0.4s ease-in-out;
        font-weight: 600;
        font-size: 0.8rem;
        letter-spacing: 3px;
        &:hover {
          cursor: pointer;
          color: var(--white-color-2);
          transform: translateY(-5px);
        }
        &::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 50%;
          background-color: var(--primary-color-light);
          transition: 0.35s;
          z-index: -1;
        }
      }
      a:hover::before {
        width: 100%;
        height: 100%;
      }
    }
  }

  footer {
    border-top: 1px solid var(--border-color);
    width: 80%;
    p {
      padding: 1.5rem 0;
      font-size: 0.8rem;
      display: block;
      text-align: center;
    }
  }
`;

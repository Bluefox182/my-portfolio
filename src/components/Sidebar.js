import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import avatar from "../assets/img/avatar.png";

function Sidebar({ navToggle }) {
  return (
    <SidebarContainer className={`${navToggle ? "nav-toggle" : ""}`}>
      <div className="Nav-Container">
        <div className="avatar">
          <img src={avatar} alt="" />
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            <Link to="/" activeClassName="active-class">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" activeClassName="active-class">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/skills" activeClassName="active-class">
              My Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/work" activeClassName="active-class">
              Work
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" activeClassName="active-class">
              Contact
            </Link>
          </li>
        </ul>
        <footer className="footer">
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
    // border-right: 1px solid var(--border-color);

    background: linear-gradient(
      to right,
      var(--background-dark-color),
      var(--background-dark-color)
    )
    padding-box,
  linear-gradient(#3330e4, #db00ff) border-box;
border-right: 2px solid transparent;
    
  }


  .avatar {
    width: 80%;
    background: linear-gradient(
      to right,
      var(--background-dark-color),
      var(--background-dark-color)
    )
    padding-box,
    linear-gradient(to right, #3330e4, #db00ff) border-box;
    border-bottom: 2px solid transparent;
    text-align: center;
    padding: 1rem 0;
    overflow: hidden;
    img {
      width: 100%;
      border-radius: 50%;
      background-size: cover;
      background-position: center;
      border: 3px solid transparent;
      background: linear-gradient(
        to right,
        var(--background-dark-grey),
        var(--background-dark-grey)
      )
      padding-box,
      linear-gradient(to right, #3330e4, #db00ff) border-box;
    }
  }
  .nav-items {
    width: 100%;
    text-align: center;
    overflow: hidden;
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
        &::active::before {
          background: linear-gradient(
            to right,
            var(--background-dark-grey),
            var(--background-dark-grey)
          )
          padding-box,
          linear-gradient(to right, #3330e4, #db00ff) border-box;
          border: 2px solid transparent;
          border-radius: 10px;
        }
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
          background: linear-gradient(to right, #3330e4, #db00ff);
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
    background: linear-gradient(
      to right,
      var(--background-dark-color),
      var(--background-dark-color)
    )
    padding-box,
    linear-gradient(to right, #3330e4, #db00ff) border-box;
    border-top: 2px solid transparent;
    width: 80%;
    overflow: hidden;
    p {
      padding: 1.5rem 0;
      font-size: 0.8rem;
      display: block;
      text-align: center;
    }
  }
`;

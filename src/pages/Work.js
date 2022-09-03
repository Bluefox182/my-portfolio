import React, { useState } from "react";
import styled from "styled-components";
import projects from "../data/projects.js";
import ButtonProjects from "../components/ButtonProjects";
// import MenuProjects from '../components/MenuProjects';
import WorkCard from "../components/WorkCard";

const allButtons = ["ALL", ...new Set(projects.map((item) => item.category))];

function Work() {
  const [menuItem, setMenuItems] = useState(projects);
  const [button, setButtons] = useState(allButtons);

  const filter = (button) => {
    if (button === "ALL") {
      setMenuItems(projects);
      return;
    }

    const filteredData = projects.filter((item) => item.category === button);
    setMenuItems(filteredData);
  };

  return (
    <StyledWork>
      <div className="MainContainer">
        <div className="TopContainer">
          <h1 className="title">My Work</h1>
        </div>
        <div className="ProjectsContainer">
          <ButtonProjects filter={filter} button={button} />
          <WorkCard menuItem={menuItem} />
        </div>
      </div>
    </StyledWork>
  );
}

export default Work;

const StyledWork = styled.div`
  .MainContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px 0;
    transition: all 0.5s ease-in-out;

    @media (max-width: 479px) {
      margin: 0 20px;
    }
    @media (min-width: 480px) and (max-width: 768px) {
      /* width: 75%; */
    }
    @media (min-width: 768px) and (max-width: 1023px) {
      /* margin-right: 70px; */
      /* margin-left: 150px; */
      /* padding-left: 140px; */
      /* width: 80%; */
    }
  }
  .TopContainer {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    h1 {
      font-size: 2.5rem;
      font-weight: 700;
      text-align: center;
      margin-bottom: 20px;
      color: var(--primary-color-light);
      @media (max-width: 480px) {
        font-size: 2rem;
      }
    }
  }

  .ProjectsContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all 0.5s ease-in-out;
    align-items: center;
  }
`;

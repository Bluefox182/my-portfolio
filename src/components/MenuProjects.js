import React from "react";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import PreviewIcon from "@mui/icons-material/Preview";

function MenuProjects({ menuItem }) {
  return (
    <StyledMenu>
      {menuItem.map((item) => {
        return (
          <div className="grid-item" key={item.id}>
            <div className="portfolio-image">
              <img src={item.image} alt={item.title} />

              <ul className="overlay">
                <h6>{item.title}</h6>
                <p>{item.text}</p>
                <div className="overlay-text">
                  <li>
                    <a href={item.link1} target="_blank" rel="noreferrer">
                      <GitHubIcon sx={{ fontSize: 40 }} />
                    </a>
                  </li>
                  <li>
                    <a href={item.link2} target="_blank" rel="noreferrer">
                      <PreviewIcon sx={{ fontSize: 40 }} />
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        );
      })}
    </StyledMenu>
  );
}

export default MenuProjects;

const StyledMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 15px;
  @media (max-width: 480px) {
    padding: 5px 15px;
    justify-content: space-between;
  }

  .grid-item {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 350px;
    border-radius: 20px;
    height: 200px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    @media (min-width: 768px) and (max-width: 1023px) {
      /* width: 200px; */
    }
  }

  .portfolio-image {
    position: relative;
    width: 100%;
    height: 200px;
    object-position: 0 10%;
    overflow: hidden;
  }

  .portfolio-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .portfolio-image {
    &::before {
      content: "";
      position: absolute;
      left: 2%;
      top: 4%;
      height: 0;
      width: 0;
      transition: all 0.4s ease-in-out;
    }
  }

  .overlay {
    position: absolute;
    bottom: 100%;
    left: 0;
    right: 0;
    overflow: hidden;
    width: 100%;
    height: 0;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: flex-start;
    transition: 0.5s ease;
    background-color: #008cba;
  }
  .portfolio-image:hover .overlay {
    opacity: 0.8;
    bottom: 0;
    height: 100%;
  }

  .overlay-text {
    color: white;
    font-size: 20px;
    position: absolute;
    display: flex;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;

    li {
      background-color: #eeeeee;

      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      margin: 0 20px;
      margin-top: 40px;
      transition: all 0.4s ease-in-out;
    }
    a {
      color: var(--font-dark-color);
      &:hover {
        color: var(--primary-color-light);
      }
    }
  }

  h6 {
    font-size: 1.2rem;
    color: var(--white-color-2);
    text-align: center;
    padding: 20px 0;
    overflow: hidden;
  }
  p {
    font-size: 0.8rem;
    color: var(--white-color-2);
  }
`;

import React from "react";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import PreviewIcon from "@mui/icons-material/Preview";

function WorkCard({ menuItem }) {
  return (
    <StyledWorkCard>
      {menuItem.map((item) => {
        return (
          <div className="Card-Container" key={item.id}>
            <div className="Card-Image">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="Card-Section">
              <div className="Text-Card">
                <h6>{item.title}</h6>
                <p>{item.text}</p>
              </div>

              <div className="Card-Button">
                <button>
                  <GitHubIcon sx={{ fontSize: 18 }} />
                  <a href={item.link1} target="_blank" rel="noreferrer">
                    Code
                  </a>
                </button>
                <button>
                  <PreviewIcon sx={{ fontSize: 18 }} />
                  <a href={item.link2} target="_blank" rel="noreferrer">
                    View
                  </a>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </StyledWorkCard>
  );
}

export default WorkCard;

const StyledWorkCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;

  .Card-Container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 500px;
    border-radius: 20px;
    background-color: var(--icon-dark-color);
  }

  .Card-Image {
    height: 70%;
    overflow: hidden;

    img {
      height: 100%;
      object-fit: fill;
    }
  }

  .Card-Section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 30%;
  }

  .Text-Card {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;

    h6 {
      width: 100%;
      font-size: 1.3rem;
      padding: 10px;
    }

    p {
      width: 100%;
      font-size: 0.8rem;
      padding: 10px;
    }
  }

  .Card-Button {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-around;
    padding: 10px;
  }

  button {
    display: flex;
    width: 100px;
    height: 32px;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
          to right,
          var(--background-dark-grey),
          var(--background-dark-grey)
        )
        padding-box,
      linear-gradient(to right, #3330e4, #db00ff) border-box;
    border: 2px solid transparent;
    border-radius: 10px;
    background-color: var(--primary-color);
    color: var(--white-color);
    cursor: pointer;
    :hover {
      background: linear-gradient(to right, #3330e4, #db00ff);
      border: none;
      transition: all 0.5s ease-in-out;
    }

    a {
      text-decoration: none;
      color: var(--white-color);
      padding: 0 10px;
    }
  }
`;

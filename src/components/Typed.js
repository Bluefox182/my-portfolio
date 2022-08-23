import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
import styled from "styled-components";

function Typed() {
  return (
    <StyledTyped>
      <p>I love </p>
      <div className="typewriter">
        <TypeWriterEffect
          textStyle={{
            fontWeight: 500,
            textAlign: "center",
            // color: "#7900FF",
            color: "#DB00FF",
          }}
          startDelay={1500}
          cursorColor="#DB00FF"
          multiText={[
            "to create unique digital experiences.",
            "learning new technologies.",
            "to design new things.",
            "to code.",
          ]}
          multiTextDelay={1000}
          typeSpeed={50}
          multiTextLoop={true}
        />
      </div>
    </StyledTyped>
  );
}

export default Typed;

const StyledTyped = styled.div`
  padding: 50px 0;
  display: flex;
  align-items: center;
  p {
    font-size: 2rem;
    font-weight: 500;
    padding-right: 10px;
  }
  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 80%;
  }
  p {
    font-size: 1.8rem;
  }

  .typewriter h1 {
    font-size: 32px !important;
  }
`;

import React from "react";
import styled from "styled-components";
import ProgressBarOne from "./ProgressBars/ProgressBarOne";
import ProgressBarTwo from "./ProgressBars/ProgressBarTwo";

const LiveStats = () => {
  return (
    <Container>
      <h3>Real Time Rapport :</h3>
      <ProgressBarOne />
      <ProgressBarTwo />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #ffaa00;

  h3 {
    font-family: "Roboto";
    font-size: 18px;
    font-weight: 900px;
    margin: 1rem 0.5rem;
    color: #777777;
  }
`;
export default LiveStats;

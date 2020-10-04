import React from "react";
import styled from "styled-components";

const ProgressBarOne = () => {
  return (
    <Container>
      <Percent>
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle cx="70" cy="70" r="70"></circle>
        </svg>
        <Number>
          <h2>
            60<span>%</span>
          </h2>
        </Number>
      </Percent>
      <h2>
        <Label />
        Active Devices
      </h2>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1.5rem;
  h2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 1rem;
    font-size: 14px;
    font-family: "Roboto";
    font-weight: 700;
    color: #777777;
  }
`;

const Label = styled.div`
  height: 18px;
  width: 18px;
  background-color: #ff8214;
  border-radius: 18px;
  margin-right: 1rem;
`;
const Percent = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  svg {
    position: relative;
    width: 150px;
    height: 150px;
    circle {
      width: 100px;
      height: 100px;
      fill: none;
      stroke-width: 10;
      stroke: black;
      transform: translate(5px, 5px);
      stroke-dasharray: 440;
      stroke-dashoffset: 440;
      stroke-linecap: round;
    }
    circle:nth-child(1) {
      stroke-dashoffset: 0;
      stroke: #afbbb2;
    }
    circle:nth-child(2) {
      stroke-dashoffset: calc(440 - (440 * 60) / 100);
      stroke: #ff8214;
    }
  }
`;

const Number = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #777777;
  h2 {
    font-size: 24px;
    font-family: "Roboto";
    font-weight: 700;
  }
`;

export default ProgressBarOne;

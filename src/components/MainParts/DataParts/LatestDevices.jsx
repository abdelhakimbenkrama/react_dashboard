import React from "react";
import styled from "styled-components";
import DevicesList from "./DevicesList/DevicesList";
const LatestDevices = () => {
  return (
    <Container>
      <h3>Latest Devices:</h3>
      <DevicesList />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50%;

  h3 {
    font-family: "Roboto";
    font-size: 18px;
    font-weight: 700px;
    margin: 0.3rem 0.5rem;
    color: #777777;
  }
`;
export default LatestDevices;

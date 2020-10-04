import React from "react";
import styled from "styled-components";
import LiveStats from "./LiveStats";
import LatestDevices from "./LatestDevices";
const DataDisplayer = () => {
  return (
    <Container>
      <LiveStats />
      <LatestDevices />
    </Container>
  );
};
const Container = styled.div`
  height: 100%;
  left: 0;
  bottom: 0;
  top: 0;
  padding: 0;
  margin: 0;
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 1px solid #ffaa00;
`;
export default DataDisplayer;

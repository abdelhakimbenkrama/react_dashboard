import React from "react";
import styled from "styled-components";
import Sidebar from "./MainParts/Sidebar";
import Map from "./MainParts/MapParts/Map";
import DataDisplayer from "./MainParts/DataParts/DataDisplayer";
const Main = () => {
  return (
    <Container>
      <Sidebar />
      <Map />
      <DataDisplayer />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
`;
export default Main;

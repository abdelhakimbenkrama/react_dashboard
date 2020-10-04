import React from "react";
import styled from "styled-components";
import MapNavBar from "./MapNavBar";
import MapFromApi from "./MapFromApi";

const Map = () => {
  return (
    <Container>
      <MapNavBar />
      <MapFromApi />
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
  width: 75%;
  display: flex;
  flex-direction: column;
`;
export default Map;

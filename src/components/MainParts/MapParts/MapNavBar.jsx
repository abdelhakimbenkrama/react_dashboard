import React from "react";
import styled from "styled-components";
import NavBarItem from "./NavBarItem";

const MapNavBar = () => {
  return (
    <Container>
      <NavBarItem name="Devices" />
      <NavBarItem name="Events" />
      <NavBarItem name="Users" />
      <NavBarItem name="History" />
      <NavBarItem name="Diagrams" />
      <NavBarItem name="Raports" />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: white;
  border-top: 1px solid #ffaa00;
  display: flex;
  flex-direction: row;
`;

export default MapNavBar;

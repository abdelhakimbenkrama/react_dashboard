import React from "react";
import styled from "styled-components";
import Menu from "./Menu/Menu";
const Sidebar = () => {
  return (
    <Container>
      <Menu />
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
  width: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffaa00;
`;
export default Sidebar;

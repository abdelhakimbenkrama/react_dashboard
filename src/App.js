import React from "react";
import styled from "styled-components";
import Main from "./components/Main";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Container>
      <NavBar />
      <Main />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
`;
export default App;

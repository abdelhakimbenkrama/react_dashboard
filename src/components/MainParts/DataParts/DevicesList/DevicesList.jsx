import React from "react";
import styled from "styled-components";
import DevicesListItem from "./DeviceListItem";
const DevicesList = () => {
  return (
    <Container>
      <DevicesListItem name="Audi A1" time="0:40" speed="0" />
      <DevicesListItem name="BMW X5" time="0:16" speed="40" />
      <DevicesListItem name="Audi A3" time="1:36" speed="100" />
      <DevicesListItem name="Audi Q5" time="4:30" speed="90" />
      <DevicesListItem name="Renault Clio 4" time="2:30" speed="90" />
    </Container>
  );
};

const Container = styled.div`
  padding: 0;
  margin: 0rem;
`;
export default DevicesList;

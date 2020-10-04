import React from "react";
import styled from "styled-components";
import moreIcon from "../../../../assets/Icons/more.png";
const DeviceListItem = ({ name, time, speed }) => {
  return (
    <Container>
      <MainData>
        <h3>{name}</h3>
        <h2>Active Session : {time}</h2>
      </MainData>
      <Speed>{speed} km/h</Speed>
      <Icon src={moreIcon} alt="" />
    </Container>
  );
};
const Container = styled.div`
  padding: 0;
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  &:hover {
    background-color: #e5e7ee;
  }
`;

const MainData = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;

  h3 {
    font-family: "Roboto";
    font-size: 16px;
    color: #506054;
    font-weight: 300;
    padding: 0;
    cursor: pointer;
  }
  h2 {
    font-family: "Roboto";
    font-size: 12px;
    color: #afbbb2;
    font-weight: 500;
    padding: 0;
    margin-left: 0.5rem;
  }
`;

const Speed = styled.div`
  font-family: "Roboto";
  font-size: 14px;
  color: #506054;
  font-weight: 300;
  padding: 0;
  color: #ff8214;
`;

const Icon = styled.img`
  height: 14px;
  width: 14px;
  padding-right: 0.5rem;
  cursor: pointer;
`;
export default DeviceListItem;

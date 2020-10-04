import React from "react";
import styled from "styled-components";

const MenuItem = ({ src }) => {
  return <Container src={src} />;
};

const Container = styled.img`
  cursor: pointer;
  align-items: center;
  margin-bottom: 3rem;
  height: 24px;
  width: 24px;
  transition: all 0.3s ease-in;
  cursor: pointer;
  &:hover {
    transform: translateY(-1px);
  }
`;
export default MenuItem;

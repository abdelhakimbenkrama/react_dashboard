import React from "react";
import styled from "styled-components";

const NavBarItem = ({ name }) => {
  return <Item>{name}</Item>;
};
const Item = styled.a`
  text-decoration: none;
  font-size: 16px;
  font-family: "Roboto";
  padding: 1rem 1.7rem;
  color: #777777;
  transition: all 0.3s ease-in;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: orange;
  }
`;
export default NavBarItem;

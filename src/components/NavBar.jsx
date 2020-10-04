import React from "react";
import styled from "styled-components";
import Logo from "../assets/evolt-logo.png";
import ProfileImg from "../assets/profile.jpg";
import NotificationImg from "../assets/Icons/notification.png";
const NavBar = () => {
  return (
    <Container>
      <LeftPart>
        <img src={Logo} alt="" />
        <Form type="text" placeholder="Search for something" />
      </LeftPart>

      <RightPart>
        <AddDevice>Add Device</AddDevice>
        <Notifiaction src={NotificationImg} alt="" />
        <Profile />
      </RightPart>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 2rem;
  justify-content: space-between;
`;

const AddDevice = styled.a`
  font-size: 16px;
  background-color: #ffaa00;
  padding: 0.7rem 2rem;
  text-align: center;
  color: #fff;
  border-radius: 2rem;
  cursor: pointer;
  transition: 0.2s all ease-in-out;

  &:hover {
    transform: translateY(-1px);
  }
`;
const Notifiaction = styled.img`
  height: 32px;
  width: 32px;
  margin-left: 1rem;
  cursor: pointer;
  transition: 0.2s all ease-in-out;

  &:hover {
    transform: translateY(-1px);
  }
`;

const Profile = styled.div`
  height: 48px;
  width: 48px;
  background-image: url(${ProfileImg});
  background-size: cover;
  border-radius: 24px;
  margin-left: 1rem;
`;

const RightPart = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const LeftPart = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  margin: 0;
  img {
    padding: 0.5rem 0;
    height: 30px;
    width: 80px;
  }
`;

const Form = styled.input`
  height: 50px;
  width: 300px;
  margin: 1rem 0;
  margin-left: 1rem;
  border: 0 solid black;
  background-color: #e5e7ee;
  border-radius: 25px;
  padding-left: 1rem;
  &:focus,
  &:hover {
    outline: none;
  }
`;

export default NavBar;

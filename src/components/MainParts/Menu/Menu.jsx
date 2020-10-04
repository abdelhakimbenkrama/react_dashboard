import React from "react";
import styled from "styled-components";
import MenuItem from "./MenuItem";
import ChatIcon from "../../../assets/Icons/chat.png";
import HomeIcon from "../../../assets/Icons/home.png";
import ChartIcon from "../../../assets/Icons/pie-chart.png";
import SettingsIcon from "../../../assets/Icons/settings.png";
import LogoutIcon from "../../../assets/Icons/logout.png";
const Menu = () => {
  return (
    <Container>
      <MenuItem src={HomeIcon} />
      <MenuItem src={ChatIcon} />
      <MenuItem src={SettingsIcon} />
      <MenuItem src={ChartIcon} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin: auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default Menu;

import React from "react";
import styled from "styled-components";
import { Avatar, Info } from "./index";

const SidebarWrapper = styled.div``;

const Sidebar: React.FC = () => {
  return (
    <SidebarWrapper>
      <Avatar
        userName="Dan Abramov"
        imgURL="https://avatars1.githubusercontent.com/u/810438?s=460&v=4"
      />
      <Info content="Darth vader ~" className="userName" />
      <Info content="anakinskywalker" className="userLogin" />
      <Info
        iconName="organization"
        content="The galactic empire"
        className="organization"
      />
      <Info iconName="location" content="Tatooine" className="location" />
      <Info iconName="star" content="1.000.000" className="startCount" />
      <Info iconName="repo" content="4" className="repositoriesCount" />
      <Info
        iconName="followers"
        content="99.999.999"
        className="followersCount"
      />
    </SidebarWrapper>
  );
};

export default Sidebar;

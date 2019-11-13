import React from "react";
import { Avatar, Info } from "./index";

type userInfo = {
  userName: string;
  userLogin: string;
  imgUrl: string;
  organization: string;
  location: string;
  star: string;
  repo: string;
  followers: string;
};

const Sidebar: React.FC<userInfo> = props => {
  return (
    <>
      <Avatar userName={props.userName} imgURL={props.imgUrl} />
      <Info content={props.userName} className="userName" />
      <Info content={props.userLogin} className="userLogin" />
      <Info
        content={props.organization}
        iconName="organization"
        className="organization"
      />
      <Info iconName="location" content={props.location} className="location" />
      <Info iconName="star" content={props.star} className="startCount" />
      <Info
        iconName="repo"
        content={props.repo}
        className="repositoriesCount"
      />
      <Info
        content={props.followers}
        iconName="followers"
        className="followersCount"
      />
    </>
  );
};

export default Sidebar;

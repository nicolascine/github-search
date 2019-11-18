import React from "react"
import { UserInfo } from "../store/types"
import { Avatar, Info } from "./index"

const Sidebar: React.FC<{ info: UserInfo }> = ({ info }) => {
  return (
    <>
      <Avatar userName={info.userName} imgURL={info.avatarUrl} />
      <Info content={info.userName} className="userName" />
      <Info content={info.userLogin} className="userLogin" />
      <Info content={info.organization || "-"} iconName="organization" className="organization" />
      <Info iconName="location" content={info.location || "-"} className="location" />
      <Info iconName="star" content={info.star} className="startCount" />
      <Info iconName="repo" content={info.repo} className="repositoriesCount" />
      <Info content={info.followers} iconName="followers" className="followersCount" />
    </>
  )
}

export default Sidebar

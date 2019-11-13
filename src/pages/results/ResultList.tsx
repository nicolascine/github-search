import React from "react";
import { Sidebar, Result } from "./components";

const ResultList: React.FC<{
  userInfo: {
    userName: string;
    userLogin: string;
    imgUrl: string;
    organization: string;
    location: string;
    star: string;
    repo: string;
    followers: string;
  };
  results: {
    title: string;
    description: string;
    link: string;
    starCount: string;
  }[];
}> = props => {
  return (
    <>
      <div className="column sidebar">
        <Sidebar
          userName={props.userInfo.userName}
          userLogin={props.userInfo.userLogin}
          imgUrl={props.userInfo.imgUrl}
          organization={props.userInfo.organization}
          location={props.userInfo.location}
          star={props.userInfo.star}
          repo={props.userInfo.repo}
          followers={props.userInfo.followers}
        />
      </div>
      <div className="column content">
        {props.results.map((item, index) => (
          <Result
            key={index}
            title={item.title}
            description={item.description}
            link={item.link}
            starCount={item.starCount}
          />
        ))}
      </div>
    </>
  );
};

export default ResultList;

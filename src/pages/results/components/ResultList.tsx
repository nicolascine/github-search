import React from "react";
import { Sidebar, Result } from "./index";

const ResultList: React.FC<{
  userInfo: {
    name: string;
    avatarUrl: string;
    followers: { totalCount: string };
    repositories: { totalCount: string };
    starredRepositories: {
      totalCount: string;
    };
    location: string;
    login: string;
    organization: { name?: string };
  };
  results: Array<{
    node: {
      name: string;
      description: string;
      url: string;
      stargazers: { totalCount: string };
    };
  }>;
}> = props => {
  return (
    <>
      <div className="column sidebar">
        <Sidebar
          userName={props.userInfo.name}
          userLogin={props.userInfo.login}
          imgUrl={props.userInfo.avatarUrl}
          organization={
            props.userInfo.organization && props.userInfo.organization.name
              ? props.userInfo.organization.name
              : "-"
          }
          location={props.userInfo.location || "-"}
          star={props.userInfo.starredRepositories.totalCount}
          repo={props.userInfo.repositories.totalCount}
          followers={props.userInfo.followers.totalCount}
        />
      </div>
      <div className="column content">
        {props.results.map((item, index) => (
          <Result
            key={index}
            title={item.node.name}
            description={item.node.description}
            link={item.node.url}
            starCount={item.node.stargazers.totalCount}
          />
        ))}
      </div>
    </>
  );
};

export default ResultList;

import React from "react";
import styled from "styled-components";
import followers from "../../../assets/icons/followers.svg";
import location from "../../../assets/icons/location.svg";
import organization from "../../../assets/icons/organization.svg";
import repo from "../../../assets/icons/repo.svg";
import search from "../../../assets/icons/search.svg";
import star from "../../../assets/icons/star.svg";

const Wrapper = styled.div`
  width: 100%;
  display: block;
  font-size: 20px;
  padding: 0.2em 0;
  font-family: "Raleway", sans-serif;
  color: var(--secondaryColor);
  img {
    float: left;
    padding-right: 0.5em;
  }
  &.userName {
    font-size: 35px;
    span {
      color: var(--primaryTitles);
    }
  }
  &.userLogin {
    margin-bottom: 1.5em;
    span {
      color: var(--secondaryColor);
    }
  }
`;

const icons: { [key: string]: any } = {
  followers,
  location,
  organization,
  repo,
  search,
  star
};

const Info: React.FC<{
  iconName?: string;
  content?: string;
  className: string;
}> = props => {
  return (
    <Wrapper className={props.className}>
      {props.iconName && (
        <img
          width="24"
          height="24"
          alt={props.iconName}
          src={icons[props.iconName]}
        />
      )}
      <span>{props.content}</span>
    </Wrapper>
  );
};

export default Info;

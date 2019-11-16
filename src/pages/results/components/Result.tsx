import React from "react";
import styled from "styled-components";
import { RepoItem } from "../store/types";
import star from "../../../assets/icons/star.svg";

const Item = styled.div`
  margin-bottom: 1.5em;
  .title,
  .description,
  .stars {
    display: block;
  }
  .title {
    font-size: 2.188em;
    font-weight: 400;
    @media (max-width: 768px) {
      font-size: 1.8em;
    }
    a {
      color: var(--primaryColor);
      text-decoration: none;
    }
  }
  .description {
    font-size: 1.25em;
    font-weight: 300;
    color: var(--secondaryColor);
  }
  .stars {
    font-size: 1.25em;
    font-weight: 300;
    color: var(--secondaryColor);

    img {
      float: left;
      padding-right: 0.5em;
    }
  }
`;

const Result: React.FC<{ item: RepoItem }> = ({ item }) => {
  return (
    <Item>
      <div className="title">
        <a
          title={item.title}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.title}
        </a>
      </div>
      <div className="description">{item.description}</div>
      <div className="stars">
        <img src={star} width="24" height="24" alt="stars" /> {item.starCount}
      </div>
    </Item>
  );
};

export default Result;

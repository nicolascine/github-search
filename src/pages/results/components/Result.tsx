import React from "react";
import styled from "styled-components";
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
      color: var(--primaryTextColor);
      text-decoration: none;
    }
  }
  .description {
    font-size: 1.25em;
    font-weight: 300;
  }
  .stars {
    font-size: 1.25em;
    font-weight: 300;
    img {
      float: left;
      padding-right: 0.5em;
    }
  }
`;

const Result: React.FC<{
  title: string;
  description: string;
  link: string;
  starCount: string;
}> = props => {
  return (
    <Item>
      <div className="title">
        <a
          title={props.title}
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.title}
        </a>
      </div>
      <div className="description">{props.description}</div>
      <div className="stars">
        <img src={star} width="24" height="24" alt="stars" /> {props.starCount}
      </div>
    </Item>
  );
};

export default Result;

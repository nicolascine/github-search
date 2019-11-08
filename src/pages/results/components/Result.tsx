import React from "react";
import styled from "styled-components";
import star from "../../../assets/icons/star.svg";

const ResultItem = styled.div`
  margin-bottom: 1.5em;
  .title,
  .description,
  .stars {
    display: block;
  }
  .title {
    font-size: 2.188em;
    font-weight: 400;
    a {
      color: #ac53f2;
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

const Result: React.FC = () => {
  return (
    <ResultItem>
      <div className="title">
        <a href="http://google.com" target="_blank" rel="noopener noreferrer">
          How to kill Obi-Wan
        </a>
      </div>
      <div className="description">I need more suggestions</div>
      <div className="stars">
        <img src={star} width="24" height="24" alt="stars" /> 44
      </div>
    </ResultItem>
  );
};

export default Result;

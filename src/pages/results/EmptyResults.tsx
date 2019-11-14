import React from "react";
import styled from "styled-components";

const EmptyResultsWrapper = styled.div`
  color: var(--primaryColor);
  font-size: 2.5em;
  margin: 0 auto;
  p {
    text-align: center;
  }
`;

const EmptyResults: React.FC = () => {
  return (
    <EmptyResultsWrapper>
      <p>User with not public repos....</p>
    </EmptyResultsWrapper>
  );
};

export default EmptyResults;

import React from "react";
import styled from "styled-components";
const NotFoundWrapper = styled.div`
  color: var(--primaryTextColor);
  font-size: 2.5em;
  margin: 0 auto;
  p {
    text-align: center;
  }
`;
const NotFound: React.FC = () => {
  return (
    <NotFoundWrapper>
      <p>User not found :(</p>
    </NotFoundWrapper>
  );
};

export default NotFound;

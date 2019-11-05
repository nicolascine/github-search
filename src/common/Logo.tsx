import React from "react";
import styled from "styled-components";

const LogoWrapper = styled.div`
  font-size: 3.75em;
  font-weight: 400;
  font-family: Monaco, sans-serif;
  color: black;
  text-align: center;
  max-width: 100%;
  span {
    font-family: Raleway, sans-serif;
    font-weight: 200;
    font-style: italic;
    padding-left: 0.225em;
  }
`;

const Logo: React.FC = () => {
  return (
    <LogoWrapper>
      Github<span>Search</span>
    </LogoWrapper>
  );
};

export default Logo;

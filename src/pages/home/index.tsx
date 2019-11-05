import React from "react";
import { Input, Logo } from "../../common";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  & > div {
    max-width: 750px;
    width: 100%;
    height: 100px;
  }
`;

const Home: React.FC = () => {
  return (
    <SearchContainer>
      <div>
        <Logo />
        <Input />
      </div>
    </SearchContainer>
  );
};

export default Home;

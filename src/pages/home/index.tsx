import React from "react";
import { SearchInput } from "../../common";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & > .search__wraper {
    max-width: 50%;
  }
`;

const Home: React.FC = () => {
  return (
    <SearchContainer>
      <div className="search__wraper">
        <SearchInput />
      </div>
    </SearchContainer>
  );
};

export default Home;

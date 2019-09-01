import React from "react";
import styled from "styled-components";
import Button from "./Button";
const SearchInputWrapper = styled.div`
  display: flex;
  -webkit-box-shadow: 0px 0px 1px 1px rgba(204, 204, 204, 1);
  -moz-box-shadow: 0px 0px 1px 1px rgba(204, 204, 204, 1);
  box-shadow: 0px 0px 1px 1px rgba(204, 204, 204, 1);
  border-radius: 0px 2px 2px 0px;
  & > input {
    width: 650px;
    height: 50px;
    color: #5c5c5c;
    font-size: 20px;
    border-radius: 2px 0px 0px 2px;
    font-family: "Raleway", sans-serif;
    font-weight: 100;
    padding: 0 0 0 1em;
    margin: 0px;
    outline: none;
    border: none;
    flex: 1;
  }
  & > .button__container {
    width: 100px;
    height: 50px;
    border-radius: 0px 2px 2px 0px;
    background-color: #ac53f2;
  }
`;

const SearchInput: React.FC = () => {
  return (
    <SearchInputWrapper>
      <input className="search__input" type="text" />
      <div className="button__container">
        <Button />
      </div>
    </SearchInputWrapper>
  );
};

export default SearchInput;

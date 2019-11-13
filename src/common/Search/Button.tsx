import React from "react";
import styled from "styled-components";
import SearchIcon from "../../assets/icons/search.svg";

const ButtonWrapper = styled.div`
  & > button {
    width: 100px;
    height: 50px;
    background: transparent;
    cursor: pointer;
    border: none;
    padding: 0px;
    margin: 0px;
    outline: none;
  }
`;

const Button: React.FC = () => {
  return (
    <ButtonWrapper>
      <button>
        <img src={SearchIcon} alt="Buscar" width="37" height="38" />
      </button>
    </ButtonWrapper>
  );
};

export default Button;

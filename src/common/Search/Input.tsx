import React, { useState } from "react";
import styled from "styled-components";
import { withRouter } from "react-router";
import { RouteComponentProps } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Button from "./Button";

const InputWrapper = styled.div`
  display: flex;
  box-shadow: 0px 0px 1px 1px rgba(204, 204, 204, 1);
  border-radius: 0px 2px 2px 0px;
  width: 100%;
  & > input {
    width: 100%;
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
    &::-webkit-input-placeholder {
      font-style: italic;
    }
  }
  & > .button__container {
    width: 100px;
    height: 50px;
    border-radius: 0px 2px 2px 0px;
    background-color: var(--primaryColor);
  }
`;

const Input: React.FC<RouteComponentProps & { defaultValue?: string }> = ({
  defaultValue,
  history
}) => {
  const { t } = useTranslation();
  const [currentValue, setCurrentValue] = useState("");

  const handleButtonClick = () => {
    if (currentValue && currentValue.length > 0) {
      history.push(`/results/${currentValue.trim()}`);
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (currentValue && currentValue.length > 0) {
        history.push(`/results/${currentValue.trim()}`);
      }
    }
  };

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setCurrentValue(e.currentTarget.value);
  };

  return (
    <InputWrapper>
      <input
        className="search__input"
        type="text"
        defaultValue={defaultValue}
        onKeyDown={handleInputKeyDown}
        onChange={handleInputChange}
        placeholder={t("inputplaceholder.label")}
      />
      <div className="button__container">
        <Button onClick={handleButtonClick} />
      </div>
    </InputWrapper>
  );
};

export default withRouter(Input);

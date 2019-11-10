import React from "react";
import styled from "styled-components";

const LoadingWrapper = styled.div`
  display: block;
  margin: 0 auto;
  position: relative;
  width: 64px;
  height: 64px;
  & > div {
    position: absolute;
    border: 4px solid var(--primaryColor);
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  & > div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes lds-ripple {
    0% {
      top: 28px;
      left: 28px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: -1px;
      left: -1px;
      width: 58px;
      height: 58px;
      opacity: 0;
    }
  }
`;

const Loading: React.FC = () => {
  return (
    <LoadingWrapper>
      <div></div>
      <div></div>
    </LoadingWrapper>
  );
};

export default Loading;

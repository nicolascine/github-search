import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const LogoWrapper = styled.div`
  font-size: 3.75em;
  font-weight: 400;
  font-family: Monaco, sans-serif;
  color: var(--primaryTitles);
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
  const { t } = useTranslation();

  return (
    <LogoWrapper>
      Github
      <span>
        {`${t("search.label")
          .charAt(0)
          .toUpperCase()}${t("search.label").slice(1)}`}
      </span>
    </LogoWrapper>
  );
};

export default Logo;

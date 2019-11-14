import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const EmptyResultsWrapper = styled.div`
  color: var(--primaryColor);
  font-size: 2.5em;
  margin: 0 auto;
  p {
    text-align: center;
    &:first-letter {
      text-transform: capitalize;
    }
  }
`;

const EmptyResults: React.FC = () => {
  const { t } = useTranslation();
  return (
    <EmptyResultsWrapper>
      <p>{t("emptyrepos.label")}</p>
    </EmptyResultsWrapper>
  );
};

export default EmptyResults;

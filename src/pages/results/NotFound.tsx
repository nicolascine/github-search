import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const NotFoundWrapper = styled.div`
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
const NotFound: React.FC = () => {
  const { t } = useTranslation();

  return (
    <NotFoundWrapper>
      <p>{t("notfounduser.label")} :( </p>
    </NotFoundWrapper>
  );
};

export default NotFound;

import React from "react";
import ReactDOM from "react-dom";
import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";
import { useTranslation } from "react-i18next";

import Logo from "../index";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: "en",
    backend: {
      loadPath: "/assets/i18n/{{ns}}/{{lng}}.json"
    },
    fallbackLng: "en",
    debug: true,
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ","
    }
  });

const Component = () => {
  // const { t } = useTranslation();

  return (
    <React.Suspense fallback={<div>Loading... </div>}>
      <Logo />
    </React.Suspense>
  );
};

it("renders Logo component without crashing", () => {
  const logoDiv = document.createElement("div");
  ReactDOM.render(<Component />, logoDiv);
});

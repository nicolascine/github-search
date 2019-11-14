import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import SettingsLogo from "../../assets/icons/settings.svg";
import config from "../../config";

const SettingsPanel = styled.div`
  position: fixed;
  top: 2em;
  right: 0px;
  background: white;
  box-shadow: 0px 0px 1px 1px rgba(204, 204, 204, 1);
  border-radius: 1em 0 0 1em;
  width: 50px;
  height: 50px;
  @media (max-width: 375px) {
    top: 2.5em;
    width: 35px;
    height: 35px;
  }
  h4 {
    text-transform: capitalize;
    margin-top: 5px;
  }
  h5 {
    text-transform: capitalize;
    padding-bottom: 0px;
    margin-bottom: 5px;
    margin-top: 14px;
  }
  img {
    display: block;
    margin-top: 12px;
    margin-left: 15px;
    cursor: pointer;
    width: 25px;
    height: 25px;
    @media (max-width: 375px) {
      width: 16px;
      height: 16px;
      margin-top: 9px;
      margin-left: 13px;
    }
  }
  .frame {
    background-color: white;
    box-shadow: 0px 0px 1px 1px rgba(204, 204, 204, 1);
    border-radius: 1em 0 0 1em;
    width: 200px;
    right: 0px;
    top: 5.5em;
    height: 258px;
    position: fixed;
  }
  .content {
    padding: 1em 0.4em 1em 1em;
    .colorContainer {
      border: 1px solid #eee;
      height: 25px;
      cursor: pointer;
      width: 45%;
      display: inline-block;
      margin-right: 5px;
      &:nth-child(2n) {
        margin-right: 0px;
      }
    }
    .colorItem {
      height: 25px;
      width: 50%;
      display: inline-block;
    }
    ul {
      list-style: none;
      padding: 0 5px;
      margin: 0px;
    }
    li {
      margin-bottom: 3px;
    }
    label {
      cursor: pointer;
      font-size: 0.8em;
      input {
        margin-right: 5px;
      }
    }
  }
`;

const Layout: React.FC = props => {
  const { t, i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  const [currentTheme, setCurrentTheme] = useState(
    config.THEMES[config.DEFAULT_THEME].name
  );

  const useOutsideEvent = function(ref: any) {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        if (isVisible) setIsVisible(false);
      }
    }

    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    });
  };

  const settingsRef = useRef(null);
  useOutsideEvent(settingsRef);

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

  const changeLanguage = (e: React.FormEvent<HTMLInputElement>) => {
    i18n.changeLanguage(e.currentTarget.value);
  };

  return (
    <>
      <AnimatePresence>
        <SettingsPanel ref={settingsRef}>
          <img
            src={SettingsLogo}
            alt="settings"
            onClick={(e: React.SyntheticEvent) => setIsVisible(!isVisible)}
          />

          {isVisible && (
            <motion.div
              className="frame"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ ease: "easeIn" }}
            >
              <div className="content">
                <h4>{t("setting.label")}</h4>
                <h5>{t("color.label")}</h5>
                {Object.keys(config.THEMES).map(
                  (theme: string, index: number) => (
                    <div
                      key={index}
                      className="colorContainer"
                      onClick={(e: React.SyntheticEvent) =>
                        setCurrentTheme(config.THEMES[theme].name)
                      }
                    >
                      <div
                        className="colorItem"
                        style={{
                          backgroundColor: `${config.THEMES[theme].background}`
                        }}
                      ></div>
                      <div
                        className="colorItem"
                        style={{
                          backgroundColor: `${config.THEMES[theme].color}`
                        }}
                      ></div>
                    </div>
                  )
                )}
                <h5>{t("language.label")}</h5>
                <ul>
                  <li>
                    <label>
                      <input
                        onChange={changeLanguage}
                        type="radio"
                        value="en"
                        name="language"
                        defaultChecked
                      />
                      English
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        onChange={changeLanguage}
                        type="radio"
                        value="es"
                        name="language"
                      />
                      Español
                    </label>
                  </li>
                  <li>
                    <label>
                      <input
                        onChange={changeLanguage}
                        type="radio"
                        value="br"
                        name="language"
                      />
                      Portugués
                    </label>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </SettingsPanel>
      </AnimatePresence>
      {props.children}
    </>
  );
};

export default Layout;

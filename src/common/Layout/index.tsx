import React, { useState, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import SettingsLogo from "../../assets/icons/settings.svg";
import config from "../../config";

const SettingsPanel = styled.div`
  position: fixed;
  top: 2em;
  right: 0px;
  box-shadow: 0px 0px 1px 1px rgba(204, 204, 204, 1);
  border-radius: 1em 0 0 1em;
  width: 50px;
  height: 50px;
  img {
    display: block;
    margin-top: 12px;
    margin-left: 15px;
    cursor: pointer;
  }
  div {
    box-shadow: 0px 0px 1px 1px rgba(204, 204, 204, 1);
    border-radius: 1em 0 0 1em;
    width: 200px;
    right: 0px;
    top: 5.5em;
    height: 300px;
    position: fixed;
  }
`;

const Layout: React.FC = props => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("light-purple");

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

  return (
    <>
      <AnimatePresence></AnimatePresence>

      <SettingsPanel>
        <img
          src={SettingsLogo}
          width="25"
          height="25"
          alt="settings"
          onClick={(e: React.SyntheticEvent) => setIsVisible(!isVisible)}
        />

        {isVisible && (
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}
            transition={{ ease: "easeIn" }}
          >
            <h6>Settings</h6>
            {config.themes.map((theme: string, index: number) => (
              <Fragment key={index}>
                <span
                  onClick={(e: React.SyntheticEvent) => setCurrentTheme(theme)}
                >
                  {theme}
                </span>
                <br />
              </Fragment>
            ))}
          </motion.div>
        )}
      </SettingsPanel>

      {props.children}
    </>
  );
};

export default Layout;

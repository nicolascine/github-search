import React, { useState, useRef, useEffect } from "react";
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
  .frame {
    box-shadow: 0px 0px 1px 1px rgba(204, 204, 204, 1);
    border-radius: 1em 0 0 1em;
    width: 200px;
    right: 0px;
    top: 5.5em;
    height: 300px;
    position: fixed;
  }
  .content {
    padding: 0.5em;
  }
`;

const Layout: React.FC = props => {
  const [isVisible, setIsVisible] = useState(true);

  const [currentTheme, setCurrentTheme] = useState(
    config.themes[config.defaultTheme].name
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

  return (
    <>
      <AnimatePresence>
        <SettingsPanel ref={settingsRef}>
          <img
            src={SettingsLogo}
            width="25"
            height="25"
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
                <h5>Settings</h5>

                {Object.keys(config.themes).map(
                  (theme: string, index: number) => (
                    <div
                      key={index}
                      style={{
                        border: "1px solid #eee",
                        height: "25px",
                        cursor: "pointer",
                        width: "45%",
                        display: "inline-block",
                        marginRight: "5px"
                      }}
                      onClick={(e: React.SyntheticEvent) =>
                        setCurrentTheme(config.themes[theme].name)
                      }
                    >
                      <div
                        style={{
                          height: "25px",
                          width: "50%",
                          display: "inline-block",
                          backgroundColor: `${config.themes[theme].background}`
                        }}
                      ></div>
                      <div
                        style={{
                          height: "25px",
                          width: "50%",
                          display: "inline-block",
                          backgroundColor: `${config.themes[theme].color}`
                        }}
                      ></div>
                      {/* {config.themes[theme].name} */}
                    </div>
                  )
                )}
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

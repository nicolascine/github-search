import React, { useState, Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { Home, Results } from "./pages";
import SettingsLogo from "./assets/icons/settings.svg";
import config from "./config";

const SettingsContainer = styled.div`
  position: fixed;
  top: 2em;
  right: 0px;
  box-shadow: 0px 0px 1px 1px rgba(204, 204, 204, 1);
  border-radius: 1.5em 0 0 1.5em;
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
    border-radius: 1.5em 0 0 1.5em;
    width: 200px;
    right: 0px;
    top: 5.5em;
    height: 300px;
    position: fixed;
  }
`;

const App: React.FC = () => {
  const [openSettigs, setOpenSettigs] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("light-purple");

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

  return (
    <BrowserRouter>
      <>
        <SettingsContainer>
          <img
            src={SettingsLogo}
            width="25"
            height="25"
            alt="settings"
            onClick={(e: React.SyntheticEvent) => setOpenSettigs(!openSettigs)}
          />
          {openSettigs && (
            <div>
              <h6>Settings</h6>
              {config.themes.map((theme: string, index: number) => (
                <Fragment key={index}>
                  <span
                    onClick={(e: React.SyntheticEvent) =>
                      setCurrentTheme(theme)
                    }
                  >
                    {theme}
                  </span>
                  <br />
                </Fragment>
              ))}
            </div>
          )}
        </SettingsContainer>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* both /roster and /roster/:number begin with /roster */}
          <Route path="/results" component={Results} />
        </Switch>
      </>
    </BrowserRouter>
  );
};

export default App;

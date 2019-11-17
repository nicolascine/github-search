import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import Home from "../index";

jest.mock("react-router-dom");

it("renders HomePage component without crashing", () => {
  const homePageDiv = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter keyLength={0}>
      <Home />
    </MemoryRouter>,
    homePageDiv
  );
});

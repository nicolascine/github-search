import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import Results from "../index";
jest.mock("react-router-dom");

it("renders ResultsPage component without crashing", () => {
  const resultsPageDiv = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter keyLength={0}>
      <Results />
    </MemoryRouter>,
    resultsPageDiv
  );
});

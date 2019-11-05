import React from "react";
import ReactDOM from "react-dom";
import Results from "../index";

it("renders ResultsPage component without crashing", () => {
  const resultsPageDiv = document.createElement("div");
  ReactDOM.render(<Results />, resultsPageDiv);
});

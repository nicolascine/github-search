import React from "react";
import ReactDOM from "react-dom";
import Home from "../index";

it("renders HomePage component without crashing", () => {
  const homePageDiv = document.createElement("div");
  ReactDOM.render(<Home />, homePageDiv);
});

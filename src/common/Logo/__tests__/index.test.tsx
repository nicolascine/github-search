import React from "react";
import ReactDOM from "react-dom";
import Logo from "../index";

it("renders Logo component without crashing", () => {
  const logoDiv = document.createElement("div");
  ReactDOM.render(<Logo />, logoDiv);
});

import React from "react";
import ReactDOM from "react-dom";
import Button from "../Button";

it("renders Button component without crashing", () => {
  const buttonDiv = document.createElement("div");
  ReactDOM.render(<Button />, buttonDiv);
});

import React from "react";
import ReactDOM from "react-dom";
import Input from "../Input";

it("renders Input component without crashing", () => {
  const inputDiv = document.createElement("div");
  ReactDOM.render(<Input />, inputDiv);
});

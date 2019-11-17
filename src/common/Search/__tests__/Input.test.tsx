import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import Input from "../Input";

jest.mock("react-router-dom");

const Component = () => <Input />;

it("renders Input component without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter keyLength={0}>
      <Component />
    </MemoryRouter>,
    div
  );
});

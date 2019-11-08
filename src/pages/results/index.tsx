import React from "react";
import styled from "styled-components";
import { Sidebar, Result } from "./components";
import { Logo, Input } from "../../common";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2em;

  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1152px;
  }

  .column {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
  }
`;

const Results: React.FC = () => {
  return (
    <>
      <Container>
        <div className="row">
          <div className="column" style={{ maxWidth: "300px" }}>
            <Logo />
          </div>
          <div
            className="column"
            style={{ maxWidth: "750px", paddingLeft: "50px" }}
          >
            <Input />
          </div>
        </div>
      </Container>

      <Container>
        <div className="row">
          <div className="column" style={{ maxWidth: "300px" }}>
            <Sidebar />
          </div>
          <div
            className="column"
            style={{ maxWidth: "750px", paddingLeft: "50px" }}
          >
            <Result />
            <Result />
            <Result />
            <Result />
            <Result />
            <Result />
            <Result />
            <Result />
            <Result />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Results;

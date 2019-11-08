import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
    @media (max-width: 768px) {
      flex: auto;
    }
    &.sidebar {
      max-width: 300px;
      @media (max-width: 768px) {
        margin: 0 auto 2em auto;
        max-width: 80%;
      }
    }
    &.content {
      max-width: 750px;
      padding-left: 50px;
      @media (max-width: 768px) {
        padding-left: 0px;
        max-width: 80%;
        margin: 0 auto 2em auto;
      }
    }
  }
`;

const Results: React.FC = () => {
  return (
    <>
      <Container>
        <div className="row">
          <div className="column sidebar" style={{ fontSize: "11px" }}>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <Logo />
            </Link>
          </div>
          <div className="column content">
            <Input />
          </div>
        </div>
      </Container>

      <Container>
        <div className="row">
          <div className="column sidebar">
            <Sidebar />
          </div>
          <div className="column content">
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

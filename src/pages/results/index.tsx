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
  @media (max-width: 768px) {
    padding: 0px;
  }
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
        max-width: 85%;
      }
    }
    &.content {
      max-width: 750px;
      padding-left: 50px;
      @media (max-width: 768px) {
        padding-left: 0px;
        max-width: 85%;
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
            <Sidebar
              userName={"Nicolás Silva"}
              userLogin={"nicolascine"}
              imgUrl={
                "https://avatars0.githubusercontent.com/u/2984968?s=460&v=4"
              }
              organization={"internet.com"}
              location={"Chile"}
              star={"2000"}
              repo={"11.1111.111"}
              followers={"45"}
            />
          </div>
          <div className="column content">
            <Result
              title={"this is a repo!"}
              description={"this is a description!"}
              link={"http://google.com"}
              starCount={"35.000"}
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Results;

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Logo, Input } from "../../common";
import NotFound from "./NotFound";
import ResultList from "./ResultList";

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
          <ResultList
            userInfo={{
              userName: "string",
              userLogin: "string",
              imgUrl:
                "https://avatars0.githubusercontent.com/u/2984968?s=460&v=4",
              organization: "string",
              location: "string",
              star: "string",
              repo: "string",
              followers: "string"
            }}
            results={[
              {
                title: "string",
                description: "string",
                link: "string",
                starCount: "string"
              }
            ]}
          />

          {/* <NotFound /> */}
        </div>
      </Container>
    </>
  );
};

export default Results;

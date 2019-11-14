import React from "react";
import styled from "styled-components";
import { Link, RouteComponentProps } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { withRouter } from "react-router";
import { Logo, Input, Loading } from "../../common";
import config from "../../config";
import NotFound from "./NotFound";
import ResultList from "./ResultList";
import EmptyResults from "./EmptyResults";

const USER_DATA = gql`
  query SearchReposByUser(
    $login: String!
    $queryString: String!
    $pageSize: Int!
  ) {
    search(query: $queryString, type: REPOSITORY, first: $pageSize) {
      edges {
        node {
          ... on Repository {
            name
            description
            url
            stargazers(orderBy: { field: STARRED_AT, direction: DESC }) {
              totalCount
            }
          }
        }
      }
    }
    user(login: $login) {
      name
      login
      organization(login: $login) {
        name
      }
      avatarUrl
      location
      starredRepositories {
        totalCount
      }
      repositories {
        totalCount
      }
      followers {
        totalCount
      }
    }
  }
`;

const LoadingResultContainer = styled.div`
  margin: 3em auto 0 auto;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2em;

  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1152px;
    padding: 0 2em;
  }
  .column {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    @media (max-width: 769px) {
      flex: auto;
    }
    &.sidebar {
      max-width: 300px;
      @media (max-width: 769px) {
        margin: 0 auto 2em auto;
        max-width: 85%;
      }
    }
    &.content {
      max-width: 750px;
      padding-left: 50px;
      @media (max-width: 769px) {
        padding-left: 0px;
        max-width: 85%;
        margin: 0 auto 2em auto;
      }
    }
  }
`;

const QueryContainer: React.FC<{
  queryString: string;
  owner: string;
  pageSize: number;
}> = ({ queryString, owner, pageSize }) => {
  const { loading, error, data } = useQuery(USER_DATA, {
    variables: { queryString, login: owner, pageSize }
  });

  if (loading)
    return (
      <LoadingResultContainer>
        <Loading />
      </LoadingResultContainer>
    );
  if (error) return <NotFound />;

  return (
    <>
      {!Object.keys(data.search.edges).length || !Object.keys(data.user) ? (
        <EmptyResults />
      ) : (
        <ResultList userInfo={data.user} results={data.search.edges} />
      )}
    </>
  );
};

type TParams = { userName: string };

const Results: React.FC<RouteComponentProps<TParams>> = ({ match }) => {
  const GITHUB_USER_NAME = match.params.userName;

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
            <Input defaultValue={GITHUB_USER_NAME} />
          </div>
        </div>
      </Container>

      <Container>
        <div className="row">
          <QueryContainer
            pageSize={config.DEFAULT_SEARCH_RESULTS_AMOUNT}
            owner={GITHUB_USER_NAME}
            queryString={`user:${GITHUB_USER_NAME}`}
          />
        </div>
      </Container>
    </>
  );
};

export default withRouter(Results);

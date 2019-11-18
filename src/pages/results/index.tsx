import React from "react"
import styled from "styled-components"
import { loader } from "graphql.macro"
import { Link, RouteComponentProps } from "react-router-dom"
import { withRouter } from "react-router"
import { useQuery } from "@apollo/react-hooks"
import { connect } from "react-redux"
import { Dispatch } from "redux"
import { ResultsState, ResultsActionTypes, RepoItem, UserInfo } from "./store/types"
import { requestUserInfo, requestItems } from "./store/actions"
import { Logo, Input, Loading } from "../../common"
import config from "../../config"
import { NotFound, ResultList, EmptyResults } from "./components"
import ResultSerializer from "./serializer"

const reasultsFactory = new ResultSerializer()
const USER_DATA = loader("./github-user.graphql")

const LoadingResultContainer = styled.div`
  margin: 3em auto 0 auto;
`

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
`

const QueryComponent: React.FC<{
  queryString: string
  owner: string
  pageSize: number
  requestUserInfoAction: Function
  requestResultsAction: Function
}> = ({ queryString, owner, pageSize, requestUserInfoAction, requestResultsAction }) => {
  const { loading, error, data } = useQuery(USER_DATA, {
    variables: { queryString, login: owner, pageSize },
    onCompleted: data => {
      const edges = reasultsFactory.edges(data.search.edges)
      const user = reasultsFactory.user(data.user)

      requestUserInfoAction(user)
      requestResultsAction(edges)
    }
  })

  if (loading)
    return (
      <LoadingResultContainer>
        <Loading />
      </LoadingResultContainer>
    )
  if (error) return <NotFound />

  if (!data.search.edges || !data.user) {
    return <p>Error :( </p>
  } else {
    return (
      <>
        {!Object.keys(data.search.edges).length || !Object.keys(data.user) ? (
          <EmptyResults />
        ) : (
          <ResultList />
        )}
      </>
    )
  }
}

const Results: React.FC<RouteComponentProps<{ userName: string }> & {
  requestUserInfoAction: Function
  requestResultsAction: Function
}> = ({ match, requestUserInfoAction, requestResultsAction }) => {
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
            <Input defaultValue={match.params.userName} />
          </div>
        </div>
      </Container>

      <Container>
        <div className="row">
          <QueryComponent
            requestUserInfoAction={requestUserInfoAction}
            requestResultsAction={requestResultsAction}
            pageSize={config.DEFAULT_SEARCH_RESULTS_AMOUNT}
            owner={match.params.userName}
            queryString={`user:${match.params.userName}`}
          />
        </div>
      </Container>
    </>
  )
}

const mapStateToProps = (state: ResultsState) => ({
  results: state.results
})

const mapDispatchToProps = (dispatch: Dispatch<ResultsActionTypes>) => {
  return {
    requestUserInfoAction: (userInfo: UserInfo) => dispatch(requestUserInfo(userInfo)),
    requestResultsAction: (item: RepoItem[]) => dispatch(requestItems(item))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Results))

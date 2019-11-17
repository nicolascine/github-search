import React from "react";
import { connect } from "react-redux";
import { UserInfoState, ResultsState } from "../store/types";
import { Sidebar, Result } from "./index";

const ResultList: React.FC<UserInfoState & ResultsState> = ({
  userInfo,
  results
}) => {
  return (
    <>
      <div className="column sidebar">
        <Sidebar info={userInfo} />
      </div>
      <div className="column content">
        {results.map((item, index) => (
          <Result key={index} item={item} />
        ))}
      </div>
    </>
  );
};

const mapStateToProps = (state: UserInfoState & ResultsState) => ({
  userInfo: state.userInfo,
  results: state.results
});

export default connect(mapStateToProps)(ResultList);

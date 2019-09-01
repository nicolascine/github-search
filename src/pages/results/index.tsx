import React from "react";
import { SearchInput } from "../../common";

const Results: React.FC = () => {
  return (
    <div className="layout" style={{ maxWidth: "750px", padding: "1em" }}>
      <SearchInput />
    </div>
  );
};

export default Results;

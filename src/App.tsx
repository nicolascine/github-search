import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, Results } from "./pages";

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      {/* both /roster and /roster/:number begin with /roster */}
      <Route path="/results" component={Results} />
    </Switch>
  );
};

export default App;

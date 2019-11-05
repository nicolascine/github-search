import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, Results } from "./pages";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* both /roster and /roster/:number begin with /roster */}
        <Route path="/results" component={Results} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

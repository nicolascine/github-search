import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Results } from "./pages";

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/results/" component={Results} />
    </Router>
  );
};

export default App;

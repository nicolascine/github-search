import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./i18n.tsx";
import { Layout } from "./common";
import { Home, Results } from "./pages";

const App: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* both /roster and /roster/:number begin with /roster */}
            <Route path="/results" component={Results} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;

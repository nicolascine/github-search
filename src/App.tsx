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
            <Route path="/results/:userName" component={Results} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { ConnectedRouter } from "connected-react-router";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { Provider } from "react-redux";
import configureStore, { history } from "./store/configureStore";
import config from "./config";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import "./styles/index.scss";

const client = new ApolloClient({
  uri: config.GRAPHQL_API_PATH,
  headers: {
    Authorization: `bearer ${config.GITHUB_TOKEN}`
  }
});

const store = configureStore();

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

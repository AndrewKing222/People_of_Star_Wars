import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  ApolloClient,
  NormalizedCacheObject,
  ApolloProvider,
} from "@apollo/client";
import { cache } from "./cache";

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  uri: "/graphql",
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

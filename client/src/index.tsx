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
  uri: "http://localhost:4000/graphql",
});

// client
//   .query({
//     query: gql`
//       query TestQuery {
//         personDetails(id: 2) {
//           name
//           height
//           mass
//           gender
//           homeworld {
//             name
//           }
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result));

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

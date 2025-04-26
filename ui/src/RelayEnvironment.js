// your-app-name/src/RelayEnvironment.js
import {
  Environment,
  Network,
  RecordSource,
  Store,
  Observable,
} from "relay-runtime";
import fetchGraphQL from "./fetchGraphQL";
import { createClient } from "graphql-ws";

const wsClient = createClient({
  url: "ws://localhost:5433/graphql",
});

const subscribe = (operation, variables) => {
  console.log(`Subscribing to: ${operation.name} with vars: ${variables}`);
  return Observable.create((sink) => {
    return wsClient.subscribe(
      {
        operationName: operation.name,
        query: operation.text,
        variables,
      },
      sink,
    );
  });
};

// Relay passes a "params" object with the query name and text. So we define a helper function
// to call our fetchGraphQL utility with params.text.
async function fetchRelay(params, variables) {
  console.log(
    `fetching query ${params.name} with ${JSON.stringify(variables)}`,
  );
  return fetchGraphQL(params.text, variables);
}

// Export a singleton instance of Relay Environment configured with our network function:
export default new Environment({
  network: Network.create(fetchRelay, subscribe),
  store: new Store(new RecordSource()),
});

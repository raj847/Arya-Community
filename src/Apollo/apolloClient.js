import { ApolloClient, InMemoryCache, split, HttpLink } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

const wsLink = new WebSocketLink({
  uri: "wss://prompt-jawfish-22.hasura.app/v1/graphql",
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        "x-hasura-admin-secret":
          "zLWKi1LnhAw4Ch8K2gnM7JPw33nGbUXHC4R7Vk5y0B2AUaf1PDvDHJOoHv5UEayu",
      },
    },
  },
});

const httpLink = new HttpLink({
  uri: "https://prompt-jawfish-22.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "zLWKi1LnhAw4Ch8K2gnM7JPw33nGbUXHC4R7Vk5y0B2AUaf1PDvDHJOoHv5UEayu",
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

export const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache({
    addTypename: false,
  }),
});

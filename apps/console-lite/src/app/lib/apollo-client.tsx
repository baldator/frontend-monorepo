import {
  ApolloClient,
  from,
  HttpLink,
  InMemoryCache,
  split,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { RetryLink } from '@apollo/client/link/retry';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient as createWSClient } from 'graphql-ws';
import { getMainDefinition } from '@apollo/client/utilities';

export function createClient(base?: string) {
  if (!base) {
    throw new Error('Base must be passed into createClient!');
  }
  const urlHTTP = new URL(base);
  const urlWS = new URL(base);
  // Replace http with ws, preserving if its a secure connection eg. https => wss
  urlWS.protocol = urlWS.protocol.replace('http', 'ws');

  const cache = new InMemoryCache({
    typePolicies: {
      Market: {
        merge: true,
      },
      Party: {
        merge: true,
      },
      Query: {},
      Account: {
        keyFields: false,
        fields: {
          balanceFormatted: {},
        },
      },
      Node: {
        keyFields: false,
      },
      Instrument: {
        keyFields: false,
      },
    },
  });

  const retryLink = new RetryLink({
    delay: {
      initial: 300,
      max: 10000,
      jitter: true,
    },
  });

  const httpLink = new HttpLink({
    uri: urlHTTP.href,
    credentials: 'same-origin',
  });

  const wsLink = new GraphQLWsLink(
    createWSClient({
      url: urlWS.href,
    })
  );

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    wsLink,
    httpLink
  );

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    console.log(graphQLErrors);
    console.log(networkError);
  });

  return new ApolloClient({
    connectToDevTools: process.env['NODE_ENV'] === 'development',
    link: from([errorLink, retryLink, splitLink]),
    cache,
  });
}
